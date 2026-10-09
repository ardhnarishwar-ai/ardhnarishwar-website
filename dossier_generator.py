
import json, sys
from datetime import datetime

with open("somatic_hindi.json", "r", encoding="utf-8") as f:
    HINDI_DATA = json.load(f)

def generate_dossier(name: str, sign: str, concern: str = "Vitality & Systemic Balance", lang: str = "hi") -> str:
    sign = sign.strip().capitalize()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    
    if lang == "hi" and sign in HINDI_DATA:
        d = HINDI_DATA[sign]
        symptoms = "".join(["  • " + s + "\n" for s in d["sx"]])
        return (
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            "✦ अर्धनारीश्वर कायिक एवं प्राणिक विवरणिका ✦\n"
            "गोपनीय वेधशाला परीक्षण प्रतिवेदन\n"
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"जिज्ञासु का नाम      : {name}\n"
            f"राशि / लग्न स्वरूप  : {d['sn']} ({sign})\n"
            f"मूल तत्व            : {d['el']}\n"
            f"परामर्श विषय         : {concern}\n"
            f"समय मुहर            : {timestamp}\n"
            "────────────────────────────────────────\n"
            "1. जैविक एवं शारीरिक केंद्र\n"
            f"{d['bc']}\n"
            f"कायिक संवेदनशील केंद्र: {d['sz']}\n\n"
            "2. यथार्थ शारीरिक संवेदनशीलता एवं लक्षण (Somatic Read)\n"
            f"{symptoms}\n"
            "3. कायिक अनुकूलता एवं प्रतिकूलता\n"
            f"  - विकार बढ़ाने वाले कारक : {d['ag']}\n"
            f"  - शांति व संतुलन देने वाले : {d['re']}\n\n"
            "4. अवचेतन संवेदी सम्मोहन (Sensory Magnetism)\n"
            f"  {d['sm']}\n"
            "────────────────────────────────────────\n"
            "संप्रभु लेजर द्वारा सुरक्षित • ardhnarishwar.in\n"
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        )
    else:
        from astro_medical_engine import ASTRO_SOMATIC_MATRIX
        d = ASTRO_SOMATIC_MATRIX[sign]
        symptoms = "".join(["  • " + s + "\n" for s in d["exact_symptoms"]])
        return (
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            "✦ ARDHNARISHWAR ASTRO-SOMATIC DOSSIER ✦\n"
            "Private Observatory Assessment\n"
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"Client Identity   : {name}\n"
            f"Zodiac Archetype  : {sign} ({d['sanskrit_name']})\n"
            f"Elemental Axis    : {d['element']}\n"
            f"Primary Inquiry   : {concern}\n"
            f"Timestamp         : {timestamp}\n"
            "────────────────────────────────────────\n"
            "1. BIOLOGICAL & ANATOMICAL CENTER\n"
            f"{d['biological_center']}\n"
            f"Somatic Focus: {d['somatic_zone']}\n\n"
            "2. EXACT SOMATIC VULNERABILITY (PHYSICAL READ)\n"
            f"{symptoms}\n"
            "3. SOMATIC MODALITIES\n"
            f"  - Triggered / Aggravated By: {d['modalities']['aggravated_by']}\n"
            f"  - Restored / Calmed By      : {d['modalities']['relieved_by']}\n\n"
            "4. SUBCONSCIOUS SENSORY MAGNETISM\n"
            f"  {d['sensory_magnetism']}\n"
            "────────────────────────────────────────\n"
            "Encrypted via Sovereign Ledger • ardhnarishwar.in\n"
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        )

def interactive_mode():
    print("\n--- Ardhnarishwar Sovereign Lead Assessment Terminal ---")
    name = input("Enter Seeker Name: ").strip() or "Seeker"
    sign = input("Enter Zodiac Sign (e.g., Cancer, Leo, Aries): ").strip().capitalize()
    concern = input("Enter Primary Area of Concern: ").strip() or "Vitality & Systemic Balance"
    lang = input("Language [en/hi] (default hi): ").strip().lower() or "hi"
    
    report = generate_dossier(name, sign, concern, lang)
    print("\n" + report + "\n")
    
    fname = f"dossier_{name.lower().replace(' ', '_')}_{lang}.txt"
    with open(fname, "w", encoding="utf-8") as f:
        f.write(report)
    print(f"✓ Saved to {fname}\n")

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--interactive":
        interactive_mode()
    else:
        print(generate_dossier("S. Raja", "Cancer", "Digestive Tone", lang="hi"))
