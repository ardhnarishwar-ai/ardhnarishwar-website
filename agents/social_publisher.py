import json, datetime
class SocialMediaGrowthBot:
    def __init__(self, brand_name="Ardhnarishwar Astromedical Solutions"):
        self.brand_name = brand_name
        self.tags = ["#MedicalAstrology", "#TissueSalts", "#VedicHealing", "#Ardhnarishwar"]
    def generate_campaign(self, topic, planet, salt):
        return {
            "timestamp": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
            "instagram_reel": {
                "hook": f"Bar-bar {topic}? Ye sharir nahi, kundli ka sanket hai!",
                "script": f"Vedic Astromedicine ke mutabiq yeh {planet} se juda hai. Cellular level par {salt} ki kami isko trigger karti hai.",
                "cta": "Apna customized bio-chemic dossier pane ke liye bio link check karein."
            },
            "facebook_ad": {
                "headline": f"Natural Cell-Salt Balance for {topic} | {self.brand_name}",
                "body": f"Samajhiye sharir ki cellular zarurat Dr. Carey ki tissue-salt vidhi se. Mukhya salt: {salt}. Visit ardhnarishwar.in"
            },
            "graphic_prompt": f"Antique gold and obsidian sacred geometry, Ardhanarishwar emblem glowing softly, ethereal planetary alignments for {planet}, 8k photorealistic"
        }
if __name__ == "__main__":
    bot = SocialMediaGrowthBot()
    kit = bot.generate_campaign("Digestive Sluggishness", "Jupiter and Rahu", "Natrum Sulph & Natrum Phos")
    print(json.dumps(kit, indent=2))
