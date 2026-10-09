# Ardhnarishwar Somatic & Vitality Intelligence Engine
# Proprietary Clinical Dossier & Astro-Somatic Profiler

import sys
import json
from datetime import datetime

ASTRO_SOMATIC_MATRIX = {
    "Aries": {
        "sanskrit_name": "Mesha",
        "element": "Fire (Tejas)",
        "biological_center": "Cranial-Neural Axis & Cerebrospinal Fluids",
        "somatic_zone": "Forehead, Scalp, Temples & Eye Orbit",
        "sensory_magnetism": "High sensory feedback around cranium and hair roots; magnetic focus drawn to expressive facial symmetry.",
        "exact_symptoms": [
            "Severe cranial tension and throbbing pain behind the eyes after sustained cognitive focus.",
            "Sudden neural fatigue or mental blackout following bursts of high-intensity concentration.",
            "Sensory hypersensitivity to harsh lights and sharp sounds; restless nerve twitching around temples."
        ],
        "modalities": {
            "aggravated_by": "Loud noise, sustained theoretical exertion, lack of sleep, emotional conflict.",
            "relieved_by": "Gentle scalp acupressure, quiet dark spaces, thermal balance, restorative silence."
        }
    },
    "Taurus": {
        "sanskrit_name": "Vrishabha",
        "element": "Earth (Prithvi)",
        "biological_center": "Hepatic-Cervical Fluid Axis & Interstitial Elimination",
        "somatic_zone": "Neck, Throat, Vocal Cords & Cervical Spine",
        "sensory_magnetism": "Extreme tactile receptivity around the throat and collarbones; deep magnetic affinity for voice tonality and neck curves.",
        "exact_symptoms": [
            "Morning heaviness and stiffness concentrated across the back of the neck and upper shoulders.",
            "Sluggish bile viscosity leading to digestive sluggishness, bitter tongue taste, and fluid congestion.",
            "Water retention in tissues with a bloated or heavy sensation, especially during sudden climate shifts."
        ],
        "modalities": {
            "aggravated_by": "Damp environments, high humidity, cold wet air, heavy dairy stagnation.",
            "relieved_by": "Dry warmth, active perspiration, light herbal astringents, warm throat compresses."
        }
    },
    "Gemini": {
        "sanskrit_name": "Mithuna",
        "element": "Air (Vayu)",
        "biological_center": "Broncho-Lymphatic Respiration & Micro-Capillary Flow",
        "somatic_zone": "Shoulders, Upper Chest, Arms & Hands",
        "sensory_magnetism": "Subconscious attraction toward expressive hands, fingers, and shoulder contours; tactile touch triggers deep connection.",
        "exact_symptoms": [
            "Shallow thoracic respiration accompanied by sticky, thick mucus build-up in the morning throat.",
            "Rapid lymphatic reactivity with tender throat glands whenever the seasonal wind changes.",
            "Micro-capillary sluggishness, dry chest tightness, and sudden nervous restlessness in the lungs."
        ],
        "modalities": {
            "aggravated_by": "Stagnant enclosed rooms, continuous AC draft, heavy fried meals.",
            "relieved_by": "Fresh breezy air, rhythmic deep breathing, open ventilated spaces, light movement."
        }
    },
    "Cancer": {
        "sanskrit_name": "Karka",
        "element": "Water (Jala)",
        "biological_center": "Visceral Elasticity & Autonomic Fluid Tone",
        "somatic_zone": "Chest, Breasts & Epigastric Cavity",
        "sensory_magnetism": "Deep sensory vulnerability centered in the chest and breast contours; magnetic pull towards warm chest-to-chest embrace, holding, and emotional touch.",
        "exact_symptoms": [
            "Epigastric pressure with a downward sagging sensation in the stomach and digestive core under emotional stress.",
            "Vascular wall laxity, tendency toward heavy fluid pooling in lower limbs and clicking joint sounds.",
            "Localized tissue drying (cracked heels/palms) contrasting with sudden emotional water-weight retention."
        ],
        "modalities": {
            "aggravated_by": "Cold drafts, emotional rejection, heavy ungrounded foods, erratic eating schedules.",
            "relieved_by": "Continuous direct dry heat, firm supportive pressure, warm broth, secure emotional spaces."
        }
    },
    "Leo": {
        "sanskrit_name": "Simha",
        "element": "Fire (Tejas)",
        "biological_center": "Neuro-Muscular Motor Axis & Cardiac Rhythmicity",
        "somatic_zone": "Upper Back, Spine & Cardiac Core",
        "sensory_magnetism": "Intense somatic awareness of the spinal arch; magnetic response to fingers tracing the backbone and poised posture.",
        "exact_symptoms": [
            "Sudden, sharp, radiating spasms in the muscular spine or core that arrive without warning.",
            "Nervous cardiac palpitations and tight muscle cramps in extremities under high-stakes performance pressure.",
            "Sudden muscular locking or acute tremors triggered by unexpected shock or emotional confrontation."
        ],
        "modalities": {
            "aggravated_by": "Cold showers, sharp chilly drafts, physical overexertion, direct cold exposure.",
            "relieved_by": "Deep intense heat, hot towels, firm kneading of back muscles, golden sun exposure."
        }
    },
    "Virgo": {
        "sanskrit_name": "Kanya",
        "element": "Earth (Prithvi)",
        "biological_center": "Intestinal Epithelial Barrier & Cellular Oxygen Transfer",
        "somatic_zone": "Abdomen, Waistline, Navel & Solar Plexus",
        "sensory_magnetism": "Heightened sensory focus on the midriff, neat waist curves, and navel center; subconscious drive toward clean lines and refined aesthetics.",
        "exact_symptoms": [
            "Intestinal sluggishness with heavy bloating, feeling as though internal oxygenation has halted post-meal.",
            "Late afternoon exhaustion accompanied by erratic skin flaking and yellowish digestive coating.",
            "Pronounced visceral anxiety (gut knots) that directly interrupts smooth nutrient absorption."
        ],
        "modalities": {
            "aggravated_by": "Stuffy heated rooms, processed fats, micro-management stress, evening fatigue.",
            "relieved_by": "Crisp outdoor air, light bitter greens, structured clean environments, digestive calm."
        }
    },
    "Libra": {
        "sanskrit_name": "Tula",
        "element": "Air (Vayu)",
        "biological_center": "Acid-Base Buffering & Renal Homeostasis",
        "somatic_zone": "Lower Back, Lumbar Arch & Gluteal Line",
        "sensory_magnetism": "High aesthetic and tactile fixation on the lumbar curve, hip symmetry, and buttocks; sensory comfort derived from harmonic balance and soft touch.",
        "exact_symptoms": [
            "Sudden systemic acidity, sour eructations, and heartburn triggered by emotional dispute or dietary shifts.",
            "Morning stiffness in small joints and fingers with an uncomfortable sensation of internal friction.",
            "Golden-creamy coating on the back of the palate and dull soreness localized across the lumbar region."
        ],
        "modalities": {
            "aggravated_by": "Refined sugars, sour fermented diets, toxic social confrontation, dehydration.",
            "relieved_by": "Alkaline hydration, soothing aesthetic surroundings, thermal balance, restorative rest."
        }
    },
    "Scorpio": {
        "sanskrit_name": "Vrishchika",
        "element": "Water (Jala)",
        "biological_center": "Pelvic-Excretory Filtration & Deep Tissue Reconstruction",
        "somatic_zone": "Pelvic Cavity, Reproductive Organs & Groin",
        "sensory_magnetism": "Visceral, raw magnetism anchored directly in the pelvic core; subconscious attraction to intensity, private boundaries, and profound somatic intimacy.",
        "exact_symptoms": [
            "Lingering internal tissue irritation and stubborn inflammatory tendencies that refuse to resolve quickly.",
            "Heavy pelvic stagnation and slow elimination channels causing deep physical lethargy.",
            "Skin breakouts that turn into deep, uncomfortable cysts rather than surfacing cleanly."
        ],
        "modalities": {
            "aggravated_by": "Stagnant humidity, suppressed emotional anger, irregular excretion, damp cold.",
            "relieved_by": "Dry heat, systemic internal purification, complete emotional release, clean warm hydration."
        }
    },
    "Sagittarius": {
        "sanskrit_name": "Dhanu",
        "element": "Fire (Tejas)",
        "biological_center": "Sciatic Nerve Conduction & Deep Structural Debris Expulsion",
        "somatic_zone": "Hips, Thighs & Sacral Curve",
        "sensory_magnetism": "Pronounced sensory connection to strong thighs, firm athletic hips, and purposeful gait; intense responsiveness to hip and thigh stimulation.",
        "exact_symptoms": [
            "Sharp, stitching pain radiating along the sciatic pathway from lower spine down to the thighs.",
            "Bone-chilling cold sensitivity where drafts feel as though they strike directly into the marrow.",
            "Restless nocturnal sleep patterns marked by sudden temperature spikes and deep physical tiredness."
        ],
        "modalities": {
            "aggravated_by": "Night chills, uncovering limbs during rest, prolonged confinement, cold wet floors.",
            "relieved_by": "Wrapping the body in heavy warmth, wide open expansive spaces, brisk gentle movement."
        }
    },
    "Capricorn": {
        "sanskrit_name": "Makara",
        "element": "Earth (Prithvi)",
        "biological_center": "Skeletal Mineralization & Structural Cellular Cohesion",
        "somatic_zone": "Knees, Skeletal Frame & Articular Cartilage",
        "sensory_magnetism": "Appreciation for sculpted bone structure, lean athletic contours, and joints; strong magnetic focus on stoic presence.",
        "exact_symptoms": [
            "Deep, aching joint dryness and cold crepitus in the knees that signals weather drops before they occur.",
            "Chronic sub-optimal nutrient uptake: feeling depleted even while consuming nourishing food.",
            "Lingering physical stiffness in extremities with a stubborn, sluggish recovery timeline."
        ],
        "modalities": {
            "aggravated_by": "Cold damp overcast weather, winter drafts, inactivity, dry unlubricated diets.",
            "relieved_by": "Dry solar heat, warm unctuous oils, steady routine, warm dry climates."
        }
    },
    "Aquarius": {
        "sanskrit_name": "Kumbha",
        "element": "Air (Vayu)",
        "biological_center": "Osmotic Fluid Distribution & Autonomic Peripheral Balance",
        "somatic_zone": "Shins, Calves & Ankles",
        "sensory_magnetism": "Unconventional sensory pathways with high sensitivity around calves, ankles, and Achilles tendon; magnetic interest in eccentricity.",
        "exact_symptoms": [
            "Paradoxical cellular state: dry mucous membranes and skin alongside watery secretions or puffy ankles.",
            "Sudden mid-morning mental exhaustion (10-11 AM) with dull eye-strain tension across the forehead.",
            "Intense sensory cravings for salty tastes paired with introverted psychological fatigue."
        ],
        "modalities": {
            "aggravated_by": "Erratic sleep cycles, prolonged screen exposure, heavy atmospheric moisture.",
            "relieved_by": "Strict rhythmic routines, consistent electrolyte balance, quiet solitude, calm pacing."
        }
    },
    "Pisces": {
        "sanskrit_name": "Meena",
        "element": "Water (Jala)",
        "biological_center": "Capillary Oxygenation & First-Stage Inflammatory Response",
        "somatic_zone": "Feet, Soles, Toes & Lymphatic Terminals",
        "sensory_magnetism": "Sublime somatic focus on bare feet, tender arches, and toe sensitivity; highly responsive to foot reflexology and warm water contact.",
        "exact_symptoms": [
            "Acute sudden rushes of heat across face and chest with bounding pulse, appearing without clear cause.",
            "Rapid onset of chills and dry throat irritation at the first minor exposure to cold draft.",
            "Extreme sensitivity in the soles of the feet, tender pressure points, and rapid lymphatic fluid pooling."
        ],
        "modalities": {
            "aggravated_by": "Physical overexertion, direct harsh sun, poorly ventilated rooms, cold wet socks/shoes.",
            "relieved_by": "Warm therapeutic foot baths, slow nasal breath-work, horizontal rest, cold temple compress."
        }
    }
}

from datetime import datetime
import sys

def generate_dossier(name: str, sign: str, concern: str = "Vitality & Systemic Balance") -> str:
    sign = sign.strip().capitalize()
    if sign not in ASTRO_SOMATIC_MATRIX:
        return f"Error: {sign} is not a valid zodiac sign."

    data = ASTRO_SOMATIC_MATRIX[sign]
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    symptoms = "".join(["  • " + s + "\n" for s in data["exact_symptoms"]])

    report = (
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "✦ ARDHNARISHWAR ASTRO-SOMATIC DOSSIER ✦\n"
        "Private Observatory Assessment\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "Client Identity   : " + name + "\n"
        "Zodiac Archetype  : " + sign + " (" + data["sanskrit_name"] + ")\n"
        "Elemental Axis    : " + data["element"] + "\n"
        "Primary Inquiry   : " + concern + "\n"
        "Timestamp         : " + timestamp + "\n"
        "────────────────────────────────────────\n"
        "1. BIOLOGICAL & ANATOMICAL CENTER\n"
        + data["biological_center"] + "\n"
        "Somatic Focus: " + data["somatic_zone"] + "\n\n"
        "2. EXACT SOMATIC VULNERABILITY (PHYSICAL READ)\n"
        + symptoms + "\n"
        "3. SOMATIC MODALITIES\n"
        "  - Triggered / Aggravated By: " + data["modalities"]["aggravated_by"] + "\n"
        "  - Restored / Calmed By      : " + data["modalities"]["relieved_by"] + "\n\n"
        "4. SUBCONSCIOUS SENSORY MAGNETISM\n"
        "  " + data["sensory_magnetism"] + "\n"
        "────────────────────────────────────────\n"
        "Encrypted via Sovereign Ledger • ardhnarishwar.in\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
    return report

def interactive_mode():
    print("\n--- Ardhnarishwar Sovereign Lead Assessment Terminal ---")
    name = input("Enter Seeker Name: ").strip() or "Seeker"
    sign = input("Enter Zodiac / Lagna Sign (e.g., Cancer, Leo, Aries): ").strip().capitalize()
    concern = input("Enter Primary Area of Concern (default: Vitality): ").strip() or "Vitality & Systemic Balance"

    report = generate_dossier(name, sign, concern)
    print("\n" + report + "\n")

    safe_name = name.lower().replace(" ", "_")
    filename = "dossier_" + safe_name + ".txt"
    with open(filename, "w") as f:
        f.write(report)
    print("✓ Dossier exported cleanly to: " + filename + "\n")

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--interactive":
        interactive_mode()
    else:
        print(generate_dossier("S. Raja", "Cancer", "Digestive & Vascular Tone"))
