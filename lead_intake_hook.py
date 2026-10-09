from http.server import HTTPServer, BaseHTTPRequestHandler
import json, os
from datetime import datetime

with open('somatic_hindi.json', 'r', encoding='utf-8') as f:
    HINDI_DATA = json.load(f)

def build_dossier(name, sign, concern, lang='hi'):
    sign = sign.strip().capitalize()
    ts = datetime.now().strftime('%Y-%m-%d %H:%M')
    d = HINDI_DATA.get(sign, HINDI_DATA.get('Cancer', {}))
    bullet = chr(8226)
    nl = chr(10)
    symptoms = ''.join([f'  {bullet} {item}{nl}' for item in d.get('sx', [])])
    border = chr(9473) * 40
    sep = chr(9472) * 40
    lines = [
        border,
        '✦ अर्धनारीश्वर कायिक एवं प्राणिक विवरणिका ✦',
        'गोपनीय वेधशाला परीक्षण प्रतिवेदन (LIVE INTAKE)',
        border,
        f'जिज्ञासु का नाम      : {name}',
        f'राशि / लग्न स्वरूप  : {d.get("sn", sign)} ({sign})',
        f'मूल तत्व            : {d.get("el", "N/A")}',
        f'परामर्श विषय         : {concern}',
        f'समय मुहर            : {ts}',
        sep,
        '1. जैविक एवं शारीरिक केंद्र (Biological Center)',
        str(d.get('bc', 'N/A')),
        f'कायिक संवेदनशील केंद्र: {d.get("sz", "N/A")}{nl}',
        '2. यथार्थ शारीरिक संवेदनशीलता एवं लक्षण (Somatic Read)',
        symptoms,
        '3. कायिक अनुकूलता एवं प्रतिकूलता (Modalities)',
        f'  - विकार बढ़ाने वाले कारक : {d.get("ag", "N/A")}',
        f'  - शांति व संतुलन देने वाले : {d.get("re", "N/A")}{nl}',
        '4. अवचेतन संवेदी सम्मोहन (Sensory Magnetism)',
        f'  {d.get("sm", "N/A")}',
        sep,
        'संप्रभु लेजर द्वारा सुरक्षित • ardhnarishwar.in',
        border
    ]
    return nl.join(lines)

class LeadWebhookHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length).decode('utf-8')
        try:
            payload = json.loads(body)
        except Exception:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'{"error": "Invalid JSON"}')
            return

        name = payload.get('name', 'Seeker')
        sign = payload.get('sign', 'Cancer')
        concern = payload.get('concern', 'Vitality')
        lang = payload.get('lang', 'hi')

        dossier = build_dossier(name, sign, concern, lang)
        os.makedirs('dossiers', exist_ok=True)
        safe = name.lower().replace(' ', '_')
        ts_id = datetime.now().strftime('%Y%m%d_%H%M%S')
        filepath = os.path.join('dossiers', f'dossier_{safe}_{ts_id}.txt')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(dossier)

        print(f'{chr(10)}[!] INBOUND LEAD PROCESSED: {name} [{sign}] -> {filepath}')

        resp = {
            'status': 'success',
            'client': name,
            'archetype': sign,
            'dossier_path': filepath,
            'preview': dossier
        }
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(resp, ensure_ascii=False).encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    port = 8787
    server = HTTPServer(('0.0.0.0', port), LeadWebhookHandler)
    print(f'✓ Ardhnarishwar Inbound Lead Sentinel Live on port {port}')
    server.serve_forever()
