// Object with each of the form sections as objects with each of that section's entries and their potential results
const OPTIONS = {
    
    // FATE Tables
    'fate': {
        'd66': [
            ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "6.1", "6.2", "6.3", "6.4", "6.5", "6.6"]
        ],
        'd4': [
            ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"]
        ],
        'd12': [
            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        ],
        'chance': [
            ["Very unlikely — 1 in 6", "Very unlikely — 1 in 6", "Very unlikely — 1 in 6", "Very unlikely — 1 in 6", "Very unlikely — 1 in 6", "Unlikely — 2 in 6", "Unlikely — 2 in 6", "Unlikely — 2 in 6", "Unlikely — 2 in 6", "Unlikely — 2 in 6", "Unlikely — 2 in 6", "Unlikely — 2 in 6", "Unlikely — 2 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "50/50 — 3 in 6", "Likely — 4 in 6", "Likely — 4 in 6", "Likely — 4 in 6", "Likely — 4 in 6", "Likely — 4 in 6", "Likely — 4 in 6", "Likely — 4 in 6", "Likely — 4 in 6", "Very likely — 5 in 6", "Very likely — 5 in 6", "Very likely — 5 in 6", "Very likely — 5 in 6", "Very likely — 5 in 6"]
        ]
    },

    // General Tables
    'general': {
        'simple': [
            ["Strong No", "Strong No", "Strong No", "Strong No", "Strong No", "No", "No", "No", "No", "No", "No", "No", "No", "Weak No", "Weak No", "Weak No", "Weak No", "Weak No", "Weak Yes", "Weak Yes", "Weak Yes", "Weak Yes", "Weak Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Strong Yes", "Strong Yes", "Strong Yes", "Strong Yes", "Strong Yes"]
        ],
        'complex': [
            ["Abandon", "Align", "Avenge", "Awaken", "Balance", "Blend", "Breach", "Break", "Channel", "Clash", "Conjure", "Connect", "Control", "Create", "Decipher", "Defeat", "Discover", "Dwell", "Eliminate", "Enrich", "Evade", "Focus", "Guard", "Harness", "Hold", "Initiate", "Manipulate", "Navigate", "Protect", "Restore", "Risk", "Scheme", "Seek", "Soothe", "Surrender", "Traverse"],
            ["Artificial", "Beautiful", "Broken", "Busy", "Cold", "Damaged", "Dark", "Defiled", "Delicate", "Empty", "Enormous", "Exotic", "Exquisite", "Fearful", "Forgotten", "Fragile", "Free", "Furious", "Glorious", "Grotesque", "Humble", "Illusory", "Intense", "Lethal", "Lonely", "Mundane", "Natural", "New", "Old", "Powerful", "Radiant", "Rustic", "Severe", "Solemn", "Strong", "Wise"],
            ["Alliance", "Authority", "Burden", "Celebration", "Community", "Corruption", "Courage", "Creature", "Danger", "Deception", "Destiny", "Disaster", "Disease", "Doubt", "Duty", "Faction", "Family", "Fear", "Hardship", "Harmony", "History", "Honor", "Hope", "Leader", "Opportunity", "Phenomenon", "Possession", "Sanctuary", "Secret", "Shelter", "Superstition", "Technology", "Trust", "Vow", "Voyage", "Wisdom"]
        ],
        'abstract': [
            ["Air", "Barrier", "Bond", "Chaos", "Darkness", "Decline", "Earth", "Edge", "Exposure", "Fate", "Fire", "Force", "Illusion", "Inertia", "Light", "Loss", "Matter", "Maze", "Movement", "Nature", "Origin", "Passage", "Path", "Peace", "Plenty", "Progress", "Protection", "Rupture", "Scarcity", "Silence", "Sound", "Space", "Spirit", "Time", "Water", "Weakness"],
            ["Belief", "Blossom", "Death", "Debt", "Decay", "Dispute", "Dominion", "Dream", "Fame", "Feeling", "Fellowship", "Freedom", "Greed", "Hate", "Health", "Heritage", "Home", "Innocence", "Intrigue", "Knowledge", "Labor", "Language", "Law", "Legacy", "Life", "Love", "Pain", "Price", "Relationship", "Rumor", "Strategy", "Structure", "Threat", "Travel", "Truth", "Wealth"]
        ],
        'intensity': [
            ["Very low, the minimum", "Very low, the minimum", "Very low, the minimum", "Very low, the minimum", "Very low, the minimum", "Low, less than expected", "Low, less than expected", "Low, less than expected", "Low, less than expected", "Low, less than expected", "Low, less than expected", "Low, less than expected", "Low, less than expected", "Average, the expected", "Average, the expected", "Average, the expected", "Average, the expected", "Average, the expected", "Average, the expected", "Average, the expected", "Average, the expected", "Average, the expected", "Average, the expected", "High, more than expected", "High, more than expected", "High, more than expected", "High, more than expected", "High, more than expected", "High, more than expected", "High, more than expected", "High, more than expected", "Very high, the maximum", "Very high, the maximum", "Very high, the maximum", "Very high, the maximum", "Very high, the maximum"]
        ]
    },

    // World Tables
    'world': {
        'name': [
            ["Aer", "Arken", "Bel", "Bryn", "Cael", "Drak", "Dyr", "Eld", "Elyr", "Evin", "Fen", "Fyr", "Ghor", "Hal", "Hyr", "Kal", "Lumin", "Lyr", "Myr", "Noc", "Oryn", "Pher", "Pyre", "Quor", "Rael", "Rune", "Sor", "Syl", "Thra", "Tyv", "Uvan", "Vorn", "Wyst", "Xyr", "Ysol", "Zan"],
            ["bane", "crest", "cross", "dale", "dor", "eon", "far", "fell", "ford", "gard", "garde", "glen", "grove", "heim", "hold", "jorn", "lund", "mark", "mire", "moor", "nir", "oria", "peak", "pier", "quill", "rath", "ridge", "shore", "spear", "spire", "stone", "theon", "tide", "vale", "wyn", "yarn"]
        ],
        'aspect': [
            ["Beasts", "Blood", "Bone", "City", "Crime", "Crystal", "Cyber", "Death", "Depths", "Desert", "Faith", "Fire", "Fists", "Frontier", "Gear", "Gods", "Ice", "Magic", "Monsters", "Moon", "Myth", "Occult", "Peaks", "Power", "Punk", "Ruins", "Science", "Sea", "Shadow", "Skies", "Space", "Sword", "Void", "War", "Wild", "Wood"],
            ["Advanced", "Concealed", "Controlled", "Dangerous", "Declining", "Disputed", "Dominant", "Emerging", "Essential", "Evident", "Evolving", "Extinct", "Forbidden", "Fragmented", "Grand", "Influential", "Integral", "Isolated", "Legendary", "Limited", "Marginal", "Modest", "Non-existent", "Outdated", "Profane", "Rare", "Receding", "Recent", "Resurging", "Sanctified", "Suppressed", "Traces", "Unknown", "Unregulated", "Unstable", "Widespread"]
        ],
        'inhabitant': [
            ["Ancient", "Arcane", "Celestial", "Corrupted", "Cursed", "Decaying", "Desolate", "Dreaming", "Eldritch", "Enchanted", "Ethereal", "Fabled", "Fiery", "Forgotten", "Forsaken", "Haunted", "Hidden", "Invincible", "Lost", "Mysterious", "Mystic", "Mythical", "Nomadic", "Primeval", "Rebel", "Renegade", "Ruined", "Sacred", "Savage", "Shadowy", "Spectral", "Timeless", "Uncharted", "Untamed", "Wandering", "War-torn"],
            ["Aliens", "Angels", "Assassins", "Automatons", "Bandits", "Demons", "Dinosaurs", "Dragons", "Elementals", "Fairies", "Gargoyles", "Ghosts", "Giants", "Gladiators", "Hunters", "Investigators", "Knights", "Lycanthropes", "Mechas", "Merfolk", "Mobsters", "Monks", "Mutants", "Pilots", "Pirates", "Psychics", "Sages", "Scientists", "Soldiers", "Spies", "Survivors", "Thieves", "Vampires", "Witches", "Wizards", "Zombies"]
        ],
        'icons': [
            ["Alien", "Arch", "Balance", "Balloon", "Bamboo", "Baobab", "Broken Link", "Burning Tree", "Candle", "Cave", "Cornucopia", "Crate", "Dove", "Drought", "Feather", "Fetus", "Flame", "Fox", "Globe", "Harpy", "Imp", "Knot", "Letter", "Lizard", "Mask", "Monster", "Pentagram", "Pointed Ear", "Pyramid", "Scorpion", "Seaweed", "Serpent", "Stones", "Stump", "Temple", "Werewolf"],
            ["Ant", "Anvil", "Award", "Banner", "Bone", "Broken Shield", "Burst", "Cactus", "Coffin", "Column", "Connection", "Constellation", "Crown", "Deal", "Door", "Fence", "Galaxy", "Gargoyle", "Holding", "Knight", "Lotus", "Musket", "Night", "Planet", "Scepter", "Skull", "Snail", "Snowglobe", "Submarine", "Tiara", "Tombstone", "Trident", "Waves", "Wheel", "Windmill", "Wizard"],
            ["Bridge", "Broken Sword", "Bubbles", "Cage", "Candelabra", "Canyon", "Cloak", "Comet", "Creature", "Cut Hand", "Eclipse", "Fang", "Fist", "Fossil", "Ghost", "Horseshoe", "Jester", "Key", "Lighthouse", "Maze", "Meteorite", "Palm Tree", "Paw", "Potion", "Raven", "Saber", "Scythe", "Shield", "Sun", "Tentacle", "Throne", "Undead", "Whale", "Witch Hat", "Worm", "Ziggurat"],
            ["Anchor", "Atom", "Battle Axe", "Book", "Broken Arrow", "Broken Planet", "Broken Skull", "Cannon", "Chemistry", "Chimp", "Cycle", "Dagger", "Dead Tree", "Diamond", "Diving", "Dragon", "Dragonfly", "Gear", "Gemstone", "Harp", "Inkwell", "Lantern", "Leech", "Mirror", "Mountain", "Obelisk", "Octopus", "Owl", "Railroad", "River", "Spider Web", "Staircase", "Sundial", "Unicorn", "Well", "Wooden Shield"]
        ]
    },

    // Exploration Tables
    'exploration': {
        'terrain': [
            ["Ageless", "Ashen", "Barren", "Black", "Blessed", "Blighted", "Broken", "Cursed", "Dead", "Deadly", "Deep", "Desolate", "Dim", "Dismal", "Dry", "Eerie", "Fallen", "Far", "Forgotten", "Forsaken", "Frozen", "Grim", "Holy", "Impassable", "Jagged", "Lush", "Misty", "Petrified", "Scorching", "Shadowy", "Shattered", "Shifting", "Sinking", "Sparse", "Still", "Wicked"],
            ["Bay", "Bog", "Cliffs", "Crags", "Desert", "Dunes", "Fells", "Fen", "Fjords", "Forest", "Glacier", "Groves", "Heath", "Heights", "Hills", "Hollows", "Jungle", "Lake", "Lowland", "Marsh", "Meadows", "Moor", "Mounds", "Mountains", "Plains", "Prairie", "Scarps", "Sea", "Steppe", "Swamp", "Thicket", "Tundra", "Valley", "Volcano", "Wasteland", "Woods"]
        ],
        'ornament': [
            ["Aromatic", "Blooming", "Brittle", "Buried", "Burning", "Colorful", "Colossal", "Floating", "Frosted", "Haunted", "Iridescent", "Isolated", "Lifeless", "Living", "Lost", "Loud", "Luminous", "Mighty", "Murky", "Overgrown", "Pale", "Parched", "Phantasmal", "Pulsating", "Rugged", "Sharp", "Stoney", "Sturdy", "Thorny", "Thundering", "Towering", "Tranquil", "Twisted", "Veiled", "Vibrant", "Weathered"],
            ["Altar", "Arch", "Birds", "Boulder", "Bridge", "Cairn", "Caves", "Circle", "Cobwebs", "Craters", "Crystals", "Flames", "Flowers", "Fossils", "Insects", "Leaves", "Mist", "Monolith", "Mushrooms", "Nests", "Orchard", "Pathways", "Pillars", "Pit", "Pond", "River", "Rodents", "Roots", "Shrine", "Springs", "Statue", "Stones", "Trees", "Vines", "Wall", "Waterfall"]
        ],
        'event': [
            ["Abnormal", "Aggressive", "Augmented", "Benevolent", "Bleak", "Bloody", "Clouded", "Collapsing", "Corrupted", "Creepy", "Deceitful", "Desolate", "Doomed", "Enraged", "Ethereal", "Exposed", "Imposing", "Infested", "Invisible", "Lost", "Malevolent", "Marked", "Mechanical", "Primitive", "Raging", "Roaming", "Sacred", "Serene", "Silent", "Solitary", "Terrifying", "Threatening", "Vengeful", "Violent", "Weak", "Wild"],
            ["Aberration", "Animal", "Bandits", "Cavern", "Chasm", "Construct", "Creature", "Disease", "Earthquake", "Elemental", "Explorer", "Fey", "Flood", "Fog", "Fortress", "Giant", "Graveyard", "Guardian", "Horror", "Hunter", "Mine", "Monster", "Pack", "Poison", "Predator", "Quicksand", "Ruins", "Spirit", "Stampede", "Storm", "Temple", "Tower", "Undead", "Village", "Wanderer", "Wildfire"]
        ],
        'findings': [
            ["Abundant", "Advanced", "Arcane", "Archaic", "Benevolent", "Broken", "Constructed", "Cryptic", "Damaged", "Dangerous", "Dead", "Decaying", "Depleted", "Empty", "Ephemeral", "Fragile", "Illusory", "Lush", "Magical", "Malevolent", "Misleading", "Natural", "Obscured", "Preserved", "Radiant", "Rare", "Rich", "Sealed", "Spoiled", "Stolen", "Strange", "Toxic", "Trapped", "Undiscovered", "Unnatural", "Valuable"],
            ["Ally", "Artefact", "Blessing", "Bones", "Cache", "Carvings", "Clue", "Footprints", "Fungi", "Garden", "Gems", "Lair", "Map", "Message", "Omen", "Passage", "Path", "Person", "Plants", "Potion", "Relic", "Resources", "Scraps", "Seeds", "Shelter", "Sign", "Spell", "Supplies", "Tools", "Totem", "Tracks", "Trap", "Vision", "Warning", "Weapons", "Wreckage"]
        ],
        'icons': [
            ["Clear", "Clear", "Clear", "Clear", "Clear", "Clear", "Clear", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy", "Partly Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Foggy", "Foggy", "Foggy", "Drizzle", "Drizzle", "Drizzle", "Drizzle", "Rain", "Rain", "Rain", "Rain", "Rain", "Thunderstorm", "Thunderstorm", "Thunderstorm"],
            ["Hot", "Hot", "Hot", "Hot", "Warm", "Warm", "Warm", "Warm", "Warm", "Mild", "Mild", "Mild", "Mild", "Mild", "Cold", "Cold", "Cold", "Cold", "Cold", "Snow", "Snow", "Snow", "Snow", "Snowstorm", "Snowstorm", "Snowstorm", "Breeze", "Breeze", "Breeze", "Wind", "Wind", "Wind", "Wind", "Hurricane", "Hurricane", "Hurricane"],
            ["North", "North", "North", "North", "North", "Northeast", "Northeast", "Northeast", "Northeast", "East", "East", "East", "East", "East", "Southeast", "Southeast", "Southeast", "Southeast", "South", "South", "South", "South", "South", "Southwest", "Southwest", "Southwest", "Southwest", "West", "West", "West", "West", "West", "Northwest", "Northwest", "Northwest", "Northwest"],
            ["Sunrise", "Sunrise", "Sunrise", "Sunrise", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Afternoon", "Afternoon", "Afternoon", "Afternoon", "Afternoon", "Afternoon", "Afternoon", "Afternoon", "Sunset", "Sunset", "Sunset", "Sunset", "Evening", "Evening", "Evening", "Evening", "Evening", "Evening", "Evening", "Late night", "Late night", "Late night", "Late night", "Late night"]
        ]
    },

    // Creation Tables
    'creation': {
        'purpose': [
            ["Amplification", "Burn", "Captivate", "Ceremony", "Command", "Containment", "Crafting", "Crush", "Defense", "Detection", "Energizing", "Expose", "Foresight", "Freeze", "Gathering", "Guidance", "Healing", "Illumination", "Judgement", "Lure", "Memorial", "Navigation", "Observation", "Passage", "Projecting", "Reflection", "Research", "Rest", "Ritual", "Sealing", "Shock", "Storage", "Study", "Transportation", "Warning", "Worship"]
        ],
        'trait': [
            ["Ancient runes inscribed", "Bioluminescent organisms", "Dark colors and texture", "Delicate, lace-like edges", "Elegant filigree details", "Embedded precious stones", "Enigmatic symbols etched", "Ethereal transparency", "Flickering effect", "Floating elements", "Fluid, organic shapes", "Fractal-inspired motifs", "Geometric precision", "Gleaming metallic finish", "Imposing structure", "Frosted appearance", "Interlocking assembly", "Intricate floral patterns", "Liquid, flowing lines", "Luminous glow", "Non-reflective texture", "Minimalist design", "Mirror-polished shine", "Muted, earthy tones", "Mystic, swirling patterns", "Natural wood grain", "Opulent gold leaf accents", "Prismatic reflections", "Rich, deep patina", "Rough, stone-like surface", "Rustic, handcrafted look", "Sleek, aerodynamic profile", "Soft, velvety covering", "Stark, contrasting lines", "Vibrant, shifting hues", "Weathered appearance"]
        ],
        'magic': [
            ["Absorb", "Amplify", "Animate", "Attract", "Awaken", "Bind", "Channel", "Conceal", "Control", "Create", "Curse", "Destroy", "Diminish", "Dispel", "Disrupt", "Divide", "Echo", "Encase", "Energize", "Enhance", "Freeze", "Ignite", "Infuse", "Manipulate", "Phase", "Purify", "Reflect", "Regenerate", "Repel", "Reveal", "Reverse", "Shape", "Summon", "Transfer", "Transform", "Warp"],
            ["Acid", "Ash", "Aura", "Beast", "Blood", "Bone", "Chaos", "Dream", "Earth", "Flames", "Fog", "Glass", "Gravity", "Ice", "Light", "Memory", "Metal", "Mind", "Plant", "Plasma", "Poison", "Portal", "Shadows", "Skin", "Sound", "Specter", "Spirit", "Stone", "Thunder", "Time", "Vines", "Void", "Water", "Wave", "Wind", "Wood"]
        ],
        'corruption': [
            ["Aging acceleration", "Animal aggression", "Blood thirst", "Chronic fatigue", "Disintegration", "Elemental imbalance", "Enveloping shadows", "Ethereal detachment", "Fire touch", "Frostbite", "Gravity distortion", "Ground trembling", "Hallucinations", "Insatiable hunger", "Insects swarming", "Invisibility", "Light dimming", "Luck drain", "Magic depletion", "Memory loss", "Metal rusting", "Mist thickening", "Mutation", "Necrosis", "Petrification", "Plant decay", "Plant growth", "Poisoning", "Silence", "Sound distortion", "Stars fading", "Stone skin", "Tech malfunction", "Time distortion", "Uncontrollable rage", "Weather anomalies"]
        ],
        'icons': [
            ["Animal Skull", "Armor", "Astrolabe", "Bee", "Boomerang", "Boot", "Broken Heart", "Chariot", "Closed Eye", "Clover", "Coin", "Crystal", "Cubes", "Ectoplasm", "Floral", "Gazelle", "Helix", "Horn Helmet", "Lizard Paw", "Magnifying Glass", "Mouse", "Mushroom", "Panther", "Poison Apple", "Puzzle", "Slime", "Spring", "Stalactite", "Stars", "Strength", "Sword", "Tsunami", "Veil", "Wall", "Wand", "Water-Resistant"],
            ["Agriculture", "Amphora", "Backpack", "Beak", "Beetle", "Bell", "Boat", "Bust", "Chaos", "Chest", "Compass", "Coral", "Crossbow", "Crystal Ball", "Die", "Division", "Esoteric", "Eye", "Fountain", "Gaze", "Gold", "Healing", "Mace", "Magic Eye", "Nose", "Pendulum", "Pincer", "Private", "Scroll", "Sea Urchin", "Spider", "Telescope", "Tornado", "Tower", "Turtle", "Vial"],
            ["Bomb", "Bonfire", "Bottle", "Brick", "Broken Egg", "Cauldron", "Chalice", "Cyclone", "Drop", "Expansion", "Fingerprint", "Floating", "Gauntlet", "Golem", "Hammer", "Horse", "Hourglass", "Keyhole", "Log", "Lute", "Paintbrush", "Pickaxe", "Portal", "Prosthetic", "Spear", "Steak", "Steam", "Stomach", "Target", "Thought", "Time", "Time Loop", "Trap", "Triskele", "Vase", "Void"],
            ["Amber", "Botany", "Bracelet", "Brain", "Burning Heart", "Butterfly", "Compass", "Direction", "Ear", "Exit", "Flower", "Heat", "Horn", "Idea", "Lightning", "Lock", "Map", "Music", "Origami", "Perfume", "Pulse", "Ring", "Safebox", "Sand", "Seashell", "Seedling", "Shell", "Smoke", "Stake", "Tarot", "Torch", "Triquetra", "Virus", "Volcano", "Whip", "Wing"]
        ]
    },

    // Scene Tables
    'scene': {
        'challenges': [
            ["Easy", "Easy", "Easy", "Easy", "Easy", "Normal", "Normal", "Normal", "Normal", "Normal", "Normal", "Normal", "Normal", "Normal", "Normal", "Hard", "Hard", "Hard", "Hard", "Hard", "Hard", "Hard", "Hard", "Hard", "Hard", "Very hard", "Very hard", "Very hard", "Very hard", "Very hard", "Very hard", "Very hard", "Extreme", "Extreme", "Extreme", "Extreme"],
            ["Ambush", "Barrier", "Battle", "Chase", "Competition", "Contest", "Crafting", "Debate", "Diplomacy", "Disaster", "Duel", "Endurance", "Enigma", "Fight", "Hardship", "Hindrance", "Hunting", "Infiltration", "Interaction", "Interrogation", "Investigation", "Menace", "Mystery", "Negotiation", "Obstacle", "Persuasion", "Puzzle", "Quarrel", "Race", "Repair", "Research", "Retrieval", "Riddle", "Task", "Threat", "Trap"]    
        ],
        'reaction': [
            ["Abort", "Advance", "Aim", "Block", "Break", "Challenge", "Climb", "Collide", "Combat", "Concentrate", "Consolidate", "Coordinate", "Cover", "Deceive", "Deflect", "Delve", "Destroy", "Dodge", "Endure", "Force", "Grab", "Help", "Impact", "Intensify", "Invest", "Knock down", "Lose", "Oppose", "Penetrate", "Persevere", "Probe", "Protect", "Retreat", "Separate", "Stun", "Surprise"],
            ["Advantage", "Ally", "Balance", "Barrier", "Chance", "Control", "Courage", "Damage", "Defense", "Determination", "Environment", "Fear", "Ferocity", "Focus", "Impulse", "Instinct", "Maneuver", "Object", "Opening", "Position", "Posture", "Power", "Precision", "Pride", "Reach", "Resource", "Senses", "Speed", "Strategy", "Strength", "Subtlety", "Technique", "Understanding", "Weakness", "Weapon", "Wound"]
        ],
        'senses': [
            ["Animal musk", "Berries", "Bitter tang", "Blood tang", "Briny odor", "Burning wood", "Citrus aroma", "Creamy scent", "Dried herbs", "Dry bark", "Earthy moss", "Floral perfume", "Fresh rain", "Fresh soil", "Freshy herbal", "Metallic rust", "Minty breeze", "Musty books", "Oily stench", "Peppery scent", "Pine needles", "Powdery perfume", "Pungent sweat", "Rotten eggs", "Rotten fruits", "Saltwater breeze", "Sharp chemics", "Smoky ash", "Spiced incense", "Spicy whiff", "Sweet honey", "Sweet-sour", "Toasted aroma", "Vinegary odor", "Wet leaves", "Zesty fragrance"],
            ["Animal echo", "Babbling brook", "Bird call", "Buzzing insects", "Chiming bells", "Chirping crickets", "Coins clinking", "Crackling fire", "Creaking wood", "Distant battle", "Distant thunder", "Eerie melody", "Eerie silence", "Explosion", "Fabric reap", "Fluttering wings", "Footsteps", "Hammering beat", "Howling wind", "Jangling keys", "Laughter", "Low hum", "Metal clang", "Muffled talk", "Pattering rain", "Predator growl", "River rumble", "Rushing waterfall", "Rustling leaves", "Small creatures", "Splashing waves", "Sudden crack", "Ticking clock", "Warning cry", "Water drip", "Whispers"]
        ],
        'activity': [
            ["Alchemical experiment", "Arrival of travelers", "Artists at work", "Children's playtime", "Clandestine gambling", "Courier's haste", "Craftsmanship display", "Dance rehearsal", "Desperate chase", "Elders' wisdom", "Enthralling performance", "Frenzied construction", "Grand celebration", "Grim execution", "Harvest season", "Hasty abduction", "Healers at service", "Hunt on the trail", "Insistent beggar", "Intense bartering", "Knightly duel", "Merchant negotiation", "Meticulous repair", "Pilgrims' devotion", "Priests in prayer", "Scholarly dispute", "Secretive rendezvous", "Sentry duty", "Soldiers on march", "Somber mourning", "Stealthy burglary", "Tavern brawl", "Tense interrogation", "Thorough search", "Vigilant patrol", "Village assembly"]
        ],
        'detail': [
            ["A character's facial expression or body language", "A character's first impression about the scene", "A detail of the local flora", "A lingering scent in the air", "A nearby conversation or interaction", "A notable ornament or detail in the environment", "A subtle, elusive sound permeating the background", "A unique architectural feature or design element", "A whispered conversation or hushed tones", "A wide shot of the landscape", "A zoom-in or close-up on a significant detail", "An interesting piece of clothing or accessory", "An overhead or bird's-eye view of the area", "An unexpected movement or action", "The ambient noise level", "The angle from which the scene is observed", "The background music or sounds", "The condition of buildings or objects", "The contrast between light and shadow", "The density or sparseness of vegetation", "The feel of a surface to the touch", "The general demeanor of the people", "The interplay between natural and artificial elements", "The overall mood and atmosphere", "The patterns on clothing or objects", "The position of the sun or moon, or the time of day", "The posture of a character", "The presence of a specific animal or creature", "The prevailing hues and tones of the scene", "The quality of materials in the surroundings", "The reverberation of sounds in the environment", "The rhythm or pace of actions and movements", "The state of the sky and clouds", "The taste or sensation of something", "The temperature of the air or surfaces", "The way light filters into the scene"]
        ],
        'development': [
            ["A choice between pursuing or abandoning a goal", "A current context brings about a surprising alliance", "A distant ally's plight reaches your ears", "A distant event foreshadows an upcoming challenge", "A found object leads to new theories", "A local dispute draws you into its fold", "A message from afar alters your plans", "A mysterious past event becomes crucially clear", "A new character enters the scene, motives unclear", "A new character holds the key to a pending mystery", "A new threat puts an ally in danger", "A personal challenge that test your resolve", "A positive twist opens a door previously closed", "A remote event ties back to a character's past", "A resource thought lost is recovered", "A significant clue is discovered", "A significant step toward a key objective", "A sudden change in the environment hinders progress", "A trap is sprung", "Ambiguity arises from a cryptic message", "An elusive secret is hinted at", "An event offers a brief respite", "An old wound resurfaces at the worst time", "An unforeseen ally offers assistance", "Closure brings about a bittersweet revelation", "Fortune shifts with a change of heart", "News of an advancing threat alters priorities", "Someone takes a surprising and impactful action", "Someone's action forces you into defense", "Someone's failure or refusal complicates your plans", "Someone's past actions come back to aid you", "Someone's success or cooperation opens new paths", "You are forced to reconsider your path", "You find a new lead on an existing quest", "Your progress is thwarted by an unforeseen obstacle", "Your talents gain unexpected recognition"]
        ],
        'complication': [
            ["Break (tool, limb, bond, trust, flow, promise)", "Harm (reputation, body, relationship, morale, perception, memory)", "Lose (evidence, way, ally, time, witness, balance)", "Escalate (tension, stakes, threat, emotion, suspicion, noise)", "Drain (energy, resources, hope, patience, focus, atmosphere)", "Expose (secret, lie, agenda, weakness, location, intention)", "Break (tool, limb, bond, trust, flow, promise)", "Harm (reputation, body, relationship, morale, perception, memory)", "Lose (evidence, way, ally, time, witness, balance)", "Escalate (tension, stakes, threat, emotion, suspicion, noise)", "Drain (energy, resources, hope, patience, focus, atmosphere)", "Expose (secret, lie, agenda, weakness, location, intention)", "Break (tool, limb, bond, trust, flow, promise)", "Harm (reputation, body, relationship, morale, perception, memory)", "Lose (evidence, way, ally, time, witness, balance)", "Escalate (tension, stakes, threat, emotion, suspicion, noise)", "Drain (energy, resources, hope, patience, focus, atmosphere)", "Expose (secret, lie, agenda, weakness, location, intention)", "Break (tool, limb, bond, trust, flow, promise)", "Harm (reputation, body, relationship, morale, perception, memory)", "Lose (evidence, way, ally, time, witness, balance)", "Escalate (tension, stakes, threat, emotion, suspicion, noise)", "Drain (energy, resources, hope, patience, focus, atmosphere)", "Expose (secret, lie, agenda, weakness, location, intention)", "Break (tool, limb, bond, trust, flow, promise)", "Harm (reputation, body, relationship, morale, perception, memory)", "Lose (evidence, way, ally, time, witness, balance)", "Escalate (tension, stakes, threat, emotion, suspicion, noise)", "Drain (energy, resources, hope, patience, focus, atmosphere)", "Expose (secret, lie, agenda, weakness, location, intention)", "Break (tool, limb, bond, trust, flow, promise)", "Harm (reputation, body, relationship, morale, perception, memory)", "Lose (evidence, way, ally, time, witness, balance)", "Escalate (tension, stakes, threat, emotion, suspicion, noise)", "Drain (energy, resources, hope, patience, focus, atmosphere)", "Expose (secret, lie, agenda, weakness, location, intention)"]
        ],
        'advantage': [
            ["Enhance (ability, sense, mood, credibility, result, intuition)", "Reveal (clue, path, truth, alibi, pattern, source)", "Save (time, ally, resource, reputation, momentum, memory)", "Obtain (evidence, ally, clearance, perspective, item, secret)", "Exploit (weakness, loophole, distraction, emotion, pattern, info)", "Prevent (harm, exposure, loss, conflict, deception, escalation)", "Enhance (ability, sense, mood, credibility, result, intuition)", "Reveal (clue, path, truth, alibi, pattern, source)", "Save (time, ally, resource, reputation, momentum, memory)", "Obtain (evidence, ally, clearance, perspective, item, secret)", "Exploit (weakness, loophole, distraction, emotion, pattern, info)", "Prevent (harm, exposure, loss, conflict, deception, escalation)", "Enhance (ability, sense, mood, credibility, result, intuition)", "Reveal (clue, path, truth, alibi, pattern, source)", "Save (time, ally, resource, reputation, momentum, memory)", "Obtain (evidence, ally, clearance, perspective, item, secret)", "Exploit (weakness, loophole, distraction, emotion, pattern, info)", "Prevent (harm, exposure, loss, conflict, deception, escalation)", "Enhance (ability, sense, mood, credibility, result, intuition)", "Reveal (clue, path, truth, alibi, pattern, source)", "Save (time, ally, resource, reputation, momentum, memory)", "Obtain (evidence, ally, clearance, perspective, item, secret)", "Exploit (weakness, loophole, distraction, emotion, pattern, info)", "Prevent (harm, exposure, loss, conflict, deception, escalation)", "Enhance (ability, sense, mood, credibility, result, intuition)", "Reveal (clue, path, truth, alibi, pattern, source)", "Save (time, ally, resource, reputation, momentum, memory)", "Obtain (evidence, ally, clearance, perspective, item, secret)", "Exploit (weakness, loophole, distraction, emotion, pattern, info)", "Prevent (harm, exposure, loss, conflict, deception, escalation)", "Enhance (ability, sense, mood, credibility, result, intuition)", "Reveal (clue, path, truth, alibi, pattern, source)", "Save (time, ally, resource, reputation, momentum, memory)", "Obtain (evidence, ally, clearance, perspective, item, secret)", "Exploit (weakness, loophole, distraction, emotion, pattern, info)", "Prevent (harm, exposure, loss, conflict, deception, escalation)"]
        ]
    },

    // Quest Tables
    'quest': {
        'mission': [
            ["Attack", "Avoid", "Battle", "Capture", "Compete", "Conquer", "Contact", "Corrupt", "Create", "Decipher", "Defend", "Deliver", "Destroy", "Discover", "Eliminate", "Escape", "Expel", "Explore", "Face", "Find", "Invade", "Investigate", "Kill", "Negotiate", "Overcome", "Protect", "Pursue", "Recover", "Rescue", "Resist", "Reveal", "Save", "Spy on", "Steal", "Strengthen", "Survive"],
            ["Ally", "Artifact", "Creature", "Dignitary", "Enemy", "Environment", "Event", "Experiment", "Group", "Heritage", "Idea", "Information", "Innocent", "Knowledge", "Leader", "Legend", "Message", "Object", "Organization", "Path", "Phenomenon", "Place", "Power", "Principle", "Prophecy", "Relationship", "Resource", "Secret", "Symbol", "System", "Technology", "Territory", "Tradition", "Treasure", "Vision", "Weapon"]
        ],
        'opposition': [
            ["Alien", "Ancient", "Arcane", "Belligerent", "Bloodthirsty", "Chaotic", "Colossal", "Corrupted", "Deceptive", "Devouring", "Dissident", "Envious", "Fallen", "Fanatical", "Ferocious", "Hostile", "Imposing", "Insidious", "Merciless", "Misguided", "Poisonous", "Possessed", "Predatory", "Rampaging", "Ruthless", "Savage", "Shadowy", "Sinister", "Supernatural", "Twisted", "Tyrannical", "Undecipherable", "Unseen", "Unstable", "Vengeful", "Voracious"],
            ["Army", "Artifact", "Assassin", "Beast", "Clan", "Corporation", "Creature", "Criminal", "Cult", "Curse", "Disaster", "Doppelganger", "Elemental", "Entity", "Environment", "Experiment", "Faction", "Flora", "Ghost", "Invader", "Leviathan", "Noble", "Phenomenon", "Pirates", "Prophecy", "Raiders", "Rival", "Ruler", "Saboteur", "Scientist", "Secret Society", "Sorcerer", "Swarm", "Undead", "Warlord", "Zealot"]
        ],
        'hindrance': [
            ["Competing interests", "Corrupt authority", "Cultural taboo", "Curse or spell", "Difficult terrain", "Espionage or sabotage", "Ethical dilemma", "Fierce competition", "Forbidden knowledge", "Forced secrecy", "Hidden agendas", "Identity concealment", "Innocents in danger", "Language barrier", "Legal restrictions", "Limited information", "Magic protection", "Moral conflict", "Necessary sacrifice", "Oath or vow", "Political intrigue", "Prophecy or destiny", "Relatives in danger", "Requires specific tool", "Resource monopoly", "Restricted access", "Rival claim", "Scarce resources", "Shifting allegiances", "Strong surveillance", "Third party interested", "Time-sensitive", "Transport issues", "Unknown technology", "Unstable environment", "Weather hazards"]
        ],
        'aid': [
            ["Advanced technology", "Allies in high places", "Ancient prophecy", "Benefactor's funding", "Cryptic key", "Detailed map", "Divine blessing", "Elite mercenary", "Essential documents", "Expert navigator", "Forgotten hero", "Forgotten lore", "Ghostly guide", "Guardian beast", "Hidden vault", "Infiltrated agent", "Insider information", "Intercepted message", "Legendary spell", "Local guide", "Magical artifact", "Master craftsman", "Nature spirit", "Network of spies", "Powerful weapon", "Protective gear", "Rebel leader", "Revealed weakness", "Safe haven", "Secret code", "Secret passage", "Special training", "Strategic outpost", "Supernatural ally", "Underground network", "Wise sage"]
        ],
        'escalation': [
            ["Time is running out", "Rival factions close in", "Civilians interfere", "Disguise broken or needed", "Unforeseen consequences", "Conflicting objectives", "Moral dilemma", "Incomplete information", "Resources are scarce", "Key abilities useless", "Trust is impossible", "Authority overstepped", "Weaknesses exploited", "Uneasy alliance", "Sinister intentions", "Powerful obstruction", "False crucial intel", "Necessary reversal", "Decipher message", "Dubious aid needed", "Quest's true nature", "Mysterious phenomenon", "Sacrificial decision", "Erratic transformation", "Paths intertwined", "Covert manipulation", "Dark secrets unveiled", "Past whispers", "Natural disaster", "Lost relative found", "Prophecy about you", "Old debt due", "Enemy returns", "Events connected", "Trap or ambush", "Power surge"]
        ],
        'reward': [
            ["Access", "Ally", "Artifact", "Blessing", "Fame", "Favor", "Guidance", "Healing", "Honor", "Influence", "Insight", "Key", "Knowledge", "Land", "Legacy", "Magic", "Pardon", "Passage", "Peace", "Position", "Protection", "Relic", "Respect", "Sanctuary", "Secret", "Skill", "Spell", "Talent", "Technique", "Title", "Treasure", "Truce", "Vision", "Wealth", "Weapon", "Wisdom"]
        ],
        'twist': [
            ["Ally's dark history", "Altered past event", "Antagonist familial tie", "Antagonist redeemed", "Artifact's sentience", "Belief challenged", "Dead character lives", "Decoy goal", "Double agent revealed", "Enemy's strong return", "Event was simulation", "False victory revealed", "Foe's resurrection", "Forbidden love revealed", "Forced nemesis alliance", "Game-changing sacrifice", "Greater threat unveiled", "Hidden enemy unveiled", "Hidden society's rise", "Justified villain actions", "Key character falls", "Lost power returns", "Love transcends rivalry", "Manipulated conflict", "Memory's deception", "Past defeat is key", "Powerful ally", "Prophecy's true meaning", "Secret alliance exposed", "Secret identity", "Shift in allegiance", "True lineage revealed", "True motive revelation", "Trusted ally's betrayal", "Unexpected inheritance", "Villain's true identity"]
        ],
        'progress': [
            ["Advance", "Ascendancy", "Awakening", "Breakthrough", "Complication", "Converge", "Crossroads", "Dead end", "Descent", "Detour", "Discovery", "Divergence", "Enlightenment", "Exposition", "Foreshadow", "Fragmentation", "Harbinger", "Impasse", "Interlude", "Manifestation", "Meander", "Merge", "Momentum", "Quandary", "Regress", "Reroute", "Respite", "Retrace", "Retreat", "Revelation", "Rift", "Setback", "Stagnation", "Turning point", "Veering", "Wrong turn"]
        ],
        'tension': [
            ["Aggravate", "Amplify", "Brew", "Build", "Calm", "Cascade", "Decrease", "Deepen", "Diminish", "Dissipate", "Ebb", "Echo", "Envelop", "Escalate", "Hover", "Increase", "Infect", "Intermittent", "Lighten", "Linger", "Loosen", "Mellow", "Peak", "Permeate", "Plateau", "Recede", "Ripple", "Simmer", "Slow", "Spike", "Spiral", "Stabilize", "Subside", "Surge", "Tighten", "Wane"]
        ]
    },

    // Location Tables
    'location': {
        'past': [
            ["Arena", "Artifacts", "Battlefield", "Burial site", "Capital", "Cataclysm", "Colony", "Coronation", "Discovery", "Drought", "Enlightenment", "Exodus", "Founding", "Gold rush", "Great fire", "Industry", "Inquisition", "Lost city", "Magic", "Migration", "Mine", "Monastery", "Palace", "Pilgrimage", "Piracy", "Plague", "Prison", "Rebellion", "Renaissance", "Revolution", "Sacred grove", "Sanctuary", "Siege", "Summit", "Treaty", "Witch trials"]
        ],
        'present': [
            ["Academy", "Arcane secrets", "Art", "Black market", "Courthouse", "Crafting", "Crime", "Crossroads", "Cuisine", "Embassy", "Entertainment", "Farm", "Festival", "Garrison", "Gemstones", "Guildhall", "Harbor", "Hospitality", "Library", "Market", "Martial arts", "Medicine", "Military", "Nature", "Observatory", "Occult", "Quarry", "Refuge", "Sanctuary", "Spices", "Spirituality", "Subsistence", "Trading post", "Vineyard", "Wisdom", "Workshop"]
        ],
        'description': [
            ["Abandoned", "Abundant", "Ancient", "Broken", "Bustling", "Contested", "Corrupted", "Cursed", "Decaying", "Desolate", "Diverse", "Enchanted", "Exposed", "Forgotten", "Forsaken", "Grim", "Haunted", "Hidden", "Infested", "Invaded", "Isolated", "Mystical", "Occupied", "Peaceful", "Prosperous", "Protected", "Radiant", "Ruined", "Sacred", "Secluded", "Serene", "Shrouded", "Stagnant", "Thriving", "Uncharted", "Wild"],
            ["Arid", "Barren", "Cold", "Colorful", "Crumbling", "Dense", "Expansive", "Extravagant", "Foggy", "Gleaming", "Glimmering", "High", "Icy", "Low", "Lush", "Majestic", "Murky", "Natural", "Opulent", "Overgrown", "Polluted", "Pristine", "Rocky", "Rugged", "Rustic", "Shadowy", "Small", "Sparse", "Sprawling", "Subterranean", "Towering", "Unkempt", "Verdant", "Vibrant", "Wide", "Withered"]
        ],
        'trouble': [
            ["Ancestral land at risk", "Ancient curse awakens", "Ancient rights challenged", "Bloodlines at war", "Broken promises", "Caught amidst strife", "Celebration at risk", "Clan feud escalates", "Command under scrutiny", "Community pillar falls", "Continuous enigma", "Corrupt knowledge", "Disappearances", "Dwindling supplies", "Enemies approaching", "Energy core unstable", "Epidemic outbreak", "Exile seeks revenge", "Fickle alliances sour", "Hazardous ritual", "Heirloom vanishes", "Invisible killers", "Land under darkness", "Marauders attacks", "Mission under threat", "Outsider sparks conflict", "Plague's spread", "Poisonous extraction", "Predator's hung", "Rebellion stirs", "Skeleton in every closet", "Supremacy struggle", "Tragic defense failure", "Treacherous pact", "Tyranny's shadow", "Vital passage blocked"]
        ],
        'building': [
            ["Administration", "Archives", "Art", "Ceremony", "Commerce", "Communication", "Craftsmanship", "Culture", "Defense", "Detention", "Diplomacy", "Education", "Energy", "Entertainment", "Gathering", "Healing", "History", "Hospitality", "Innovation", "Justice", "Knowledge", "Magic", "Memorial", "Observation", "Recreation", "Refuge", "Research", "Residence", "Rest", "Security", "Spirituality", "Storage", "Strategy", "Trade", "Training", "Worship"],
            ["Abandoned", "Ancient", "Bustling", "Compact", "Controversial", "Cozy", "Foreboding", "Fortified", "Functional", "Futuristic", "Grandiose", "Guarded", "Hidden", "Historic", "Illuminated", "Imposing", "Inviting", "Majestic", "Minimalist", "Modern", "Monumental", "Mysterious", "Natural", "Opulent", "Ornate", "Overgrown", "Pristine", "Reflective", "Sacred", "Secluded", "Serene", "Sparse", "Sprawling", "Towering", "Verdant", "Weathered"]
        ],
        'influence': [
            ["Ancient being", "Arcane academy", "Artisans' collective", "Assassins' guild", "Beast pack alpha", "City watch commander", "Council of elders", "Divine entity", "Elected official", "Elemental warden", "Forest guardian", "Guildmaster", "High clergy", "Industry leader", "Labor union", "Local magistrate", "Merchant guild", "Military general", "Monarch heir", "Monastic order", "Necromancer", "Noble court", "Oracle", "Pirate captain", "Prophet", "Rebel commander", "Royal family", "Scholarly order", "Social reformer", "Sovereign judge", "Street gang leader", "Technocratic assembly", "Thieves' syndicate", "Trade consortium", "Warrior chieftain", "Witch coven"]
        ],
        'mood': [
            ["Aloof disinterest", "Analytical appraisal", "Bustling activity", "Chilling isolation", "Contagious enthusiasm", "Deliberate avoidance", "Diplomatic formality", "Eerie stillness", "Ethereal mystique", "Festive atmosphere", "Gentle melancholy", "Guarded curiosity", "Heavy despair", "Immediate camaraderie", "Infectious joy", "Keen eagerness", "Lingering sorrow", "Mysterious allure", "Neutral observation", "Ominous foreboding", "Palpable tension", "Peaceful solitude", "Quiet anticipation", "Reserved skepticism", "Serene calmness", "Sincere concern", "Solemn respect", "Soothing harmony", "Stark bleakness", "Stoic indifference", "Subdued excitement", "Sudden unease", "Suspicious scrutiny", "Unsettling silence", "Vibrant energy", "Welcoming warmth"]
        ],
        'rumor': [
            ["Abandoned mine", "Ancient ruins", "Bewitched painting", "Buried secrets", "Corrupted official", "Cursed statue", "Disappearing ships", "Eldritch tome", "Enchanted forest", "Forbidden library", "Forbidden magic", "Forgotten graveyard", "Haunted mansion", "Hidden laboratory", "Hidden treasure", "Immortal lord", "Lost language", "Missing heirloom", "Mysterious lights", "Mystic portal", "Rebel hideout", "Royal scandal", "Sealed gate", "Secret entrance", "Secret societies", "Silent plague", "Stolen artifact", "Sunken city", "Unbreakable curse", "Uncharted land", "Unclaimed throne", "Underground passage", "Unmarked grave", "Unseen predator", "Vanishing villagers", "Wandering specter"]
        ],
        'seaks': [
            ["Advice", "Alliances", "Artifacts", "Artisanship", "Champions", "Creatures", "Diplomacy", "Energy", "Exchange", "Expansion", "Freedom", "Guidance", "Healing", "Ingredients", "Innovation", "Insight", "Inspiration", "Intelligence", "Knowledge", "Languages", "Materials", "Partnerships", "Peace", "Preservation", "Protection", "Reforms", "Reinforcements", "Relics", "Routes", "Secrets", "Stability", "Technology", "Texts", "Training", "Warriors", "Wisdom"]
        ],
        'offers': [
            ["Adventure", "Archives", "Art", "Beauty", "Contracts", "Craftsmanship", "Cuisine", "Culture", "Defenses", "Directions", "Education", "Enchantments", "Enlightenment", "Festivities", "Formulas", "Goods", "Harmony", "Herbs", "History", "Hospitality", "Immunity", "Inns", "Libraries", "Lore", "Luxury", "Marvels", "Navigation", "Passages", "Refuge", "Resources", "Sanctuaries", "Secrets", "Solace", "Stories", "Traditions", "Treasures"]
        ]
    },

    // People Tables
    'people': {
        'name': [
            ["Aer", "Bael", "Bran", "Cai", "Cal", "Dae", "El", "Eri", "Fal", "Fin", "Gal", "Har", "Is", "Jor", "Ker", "Kyl", "Lor", "Lys", "Mar", "Mor", "Nae", "Nor", "Oll", "Ori", "Phe", "Quin", "Rai", "Syl", "Tal", "Uri", "Val", "Vyr", "Wyn", "Xan", "Zan", "Zor"],
            ["ador", "aes", "bor", "bri", "cur", "dar", "dul", "est", "fer", "gan", "gil", "hes", "jon", "kel", "kyr", "lir", "lon", "mir", "mon", "nis", "orn", "pel", "quir", "ren", "ril", "ser", "tir", "tor", "urn", "vel", "ven", "wil", "xis", "yl", "yon", "zar"],
            ["ael", "ain", "al", "am", "ant", "ar", "as", "ast", "el", "elle", "en", "end", "eon", "es", "et", "ian", "ias", "iel", "il", "in", "ir", "is", "isto", "ith", "ix", "ol", "on", "or", "os", "ot", "oth", "uel", "um", "ur", "us", "yn"]
        ],
        'disposition': [
            ["Aggressive", "Aloof", "Ambivalent", "Antagonistic", "Bold", "Cautious", "Cheerful", "Confident", "Cooperative", "Curious", "Defensive", "Detached", "Dismissive", "Distrustful", "Eager", "Enthusiastic", "Friendly", "Guarded", "Helpful", "Hostile", "Indifferent", "Inquisitive", "Interested", "Inviting", "Open", "Optimistic", "Pessimistic", "Reluctant", "Resentful", "Respectful", "Suspicious", "Sympathetic", "Timid", "Uninterested", "Warm", "Wary"],
            ["Arguing", "Building", "Celebrating", "Cleaning", "Communicating", "Crafting", "Drawing", "Drinking", "Dying", "Escaping", "Exploring", "Guarding", "Healing", "Hiding", "Instructing", "Investigating", "Laughing", "Listening", "Meditating", "Nurturing", "Observing", "Painting", "Patrolling", "Planning", "Reading", "Relaxing", "Repairing", "Resting", "Running", "Searching", "Sprinting", "Studying", "Surveying", "Training", "Working", "Writing"]
        ],
        'role': [
            ["Adventurous", "Ambitious", "Betrayed", "Brave", "Cunning", "Cursed", "Desperate", "Disgraced", "Dishonored", "Elderly", "Experienced", "Fearless", "Fledgling", "Foolish", "Gifted", "Honorable", "Humble", "Legendary", "Lost", "Loyal", "Mysterious", "Noble", "Outcast", "Poor", "Reclusive", "Renowned", "Respected", "Retired", "Ruthless", "Secretive", "Skilled", "Tired", "Wealthy", "Wise", "Wounded", "Young"],
            ["Acolyte", "Apprentice", "Architect", "Artificer", "Artisan", "Assassin", "Cartographer", "Courier", "Diplomat", "Exile", "Farmer", "Forger", "Guard", "Guide", "Healer", "Herbalist", "Hermit", "Hunter", "Informant", "Laborer", "Leader", "Mercenary", "Monk", "Pilgrim", "Pirate", "Ranger", "Sage", "Sailor", "Scholar", "Scout", "Shaman", "Soldier", "Storyteller", "Thief", "Tinkerer", "Trader"]
        ],
        'descriptor': [
            ["Absent-minded", "Adorned", "Athletic", "Bitter", "Brooding", "Charismatic", "Compassionate", "Corpulent", "Delicate", "Discreet", "Elegant", "Energetic", "Enigmatic", "Flashy", "Generous", "Graceful", "Illustrious", "Impassioned", "Impulsive", "Intuitive", "Inventive", "Jovial", "Melancholic", "Menacing", "Pensive", "Philosophical", "Placid", "Pragmatic", "Resilient", "Scarred", "Scheming", "Scrawny", "Stubborn", "Taciturn", "Unassuming", "Vigilant"]
        ],
        'quirk': [
            ["Animated gestures", "Boisterous laughter", "Constant humming", "Elegant posture", "Exaggerated bow", "Faded scars", "Fidgety hands", "Flamboyant attire", "Frequent sighing", "Gentle drawl", "Haunting gaze", "Hushed whispers", "Immaculate nails", "Impeccable gloves", "Ink-stained fingers", "Intricate braids", "Lavish jewelry", "Lopsided grin", "Lost stare", "Melodic voice", "Mismatched eyes", "Monotone speech", "Nervous twitch", "Peculiar accent", "Perpetual smirk", "Piercing squint", "Restless legs", "Rhythmic tapping", "Sardonic chuckle", "Silvered hair", "Threadbare cloak", "Unkempt beard", "Vivid tattoos", "Weathered skin", "Whistling habit", "Wistful glance"]
        ],
        'drive': [
            ["Acceptance", "Adventure", "Balance", "Change", "Control", "Discovery", "Dominance", "Enlightenment", "Equality", "Excellence", "Fame", "Family", "Freedom", "Growth", "Healing", "Immortality", "Innovation", "Justice", "Knowledge", "Legacy", "Mastery", "Peace", "Power", "Protection", "Redemption", "Renown", "Respect", "Retribution", "Revolution", "Salvation", "Supremacy", "Transcendence", "Truth", "Unity", "Wealth", "Wisdom"],
            ["Ambition", "Ancestry", "Anger", "Atonement", "Betrayal", "Challenge", "Curiosity", "Despair", "Duty", "Empathy", "Envy", "Faith", "Fear", "Greed", "Guilt", "Hate", "Honor", "Hope", "Ideology", "Immunity", "Love", "Loyalty", "Necessity", "Nostalgia", "Obsession", "Passion", "Pride", "Regret", "Rivalry", "Sacrifice", "Shame", "Sorrow", "Survival", "Thrill", "Tradition", "Vengeance"]
        ],
        'secret': [
            ["Ancient curse", "Ancient lineage", "Betrayed ally", "Blackmail victim", "Broken vow", "Buried treasure", "Clandestine affair", "Criminal past", "Cursed object", "Cursed wealth", "Dangerous addiction", "Deserted duty", "Double life", "Escaped convict", "Exiled royalty", "Fabricated heroism", "Faked death", "Forbidden knowledge", "Forbidden love", "Forged documents", "Illegitimate child", "Illicit trade", "Lost heirloom", "Lost sibling", "Masked vigilante", "Mysterious benefactor", "Powerful enemy", "Schemed revolt", "Sinister pact", "Stolen identity", "Uncontrolled power", "Undercover spy", "Undisclosed illness", "Unfulfilled promise", "Unnatural talent", "Unsolved crime"]
        ],
        'seeks': [
            ["Access", "Allies", "Answers", "Assistance", "Attention", "Blessing", "Companionship", "Contacts", "Directions", "Endorsement", "Equipment", "Excitement", "Guidance", "Healing", "Information", "Inspiration", "Medicine", "Money", "Opportunity", "Pardon", "Passion", "Path", "Protection", "Provisions", "Refuge", "Relief", "Safety", "Schemes", "Secrets", "Shelter", "Sponsorship", "Supplies", "Training", "Trust", "Understanding", "Work"]
        ],
        'offers': [
            ["Advice", "Aid", "Artifacts", "Connections", "Cover", "Creativity", "Cure", "Deception", "Distraction", "Entry", "Expertise", "Gear", "Guidance", "Haven", "Influence", "Insight", "Instructions", "Intuition", "Knowledge", "Labor", "Mentorship", "Motivation", "Passage", "Resources", "Sanctuary", "Service", "Skill", "Solace", "Stories", "Strength", "Support", "Surveillance", "Tools", "Transport", "Weapons", "Wisdom"]
        ]
    },

    // Creature Tables
    'creature': {
        'name': [
            ["Brak", "Crux", "Dran", "Drax", "Ghast", "Ghor", "Glac", "Grak", "Grim", "Krax", "Krell", "Kron", "Lash", "Mal", "Mord", "Neph", "Nox", "Rax", "Shard", "Skor", "Skul", "Slith", "Sorn", "Strix", "Sal", "Thal", "Thar", "Throm", "Tyr", "Vex", "Vor", "Vorak", "Vorm", "Vraith", "Zen", "Zoth"],
            ["ader", "akul", "alis", "amos", "aris", "astar", "ater", "aug", "avor", "azun", "ector", "egor", "ellon", "emon", "entor", "eon", "ern", "inth", "iris", "itar", "ixion", "odox", "ogen", "olith", "onir", "oroth", "osis", "oth", "othek", "thos", "ulex", "ulon", "urn", "uron", "ythr", "yx"]
        ],
        'form': [
            ["Minuscule", "Tiny", "Petite", "Small", "Stocky", "Sturdy", "Bony", "Delicate", "Plump", "Sinuous", "Lithe", "Medium", "Athletic", "Slender", "Rugged", "Lean", "Bulky", "Compact", "Graceful", "Lanky", "Rotund", "Robust", "Large", "Muscular", "Hefty", "Tall", "Broad", "Ponderous", "Burly", "Towering", "Hulking", "Huge", "Enormous", "Massive", "Gargantuan", "Colossal"],
            ["Amorphous", "Amphibian", "Angelic", "Aquatic", "Avian", "Bear", "Canine", "Construct", "Crustacean", "Crystal", "Daemonic", "Draconic", "Elemental", "Faerie", "Feline", "Fungus", "Geometrical", "Humanoid", "Insectoid", "Jellyfish", "Lizard", "Metallic", "Octopus", "Ooze", "Plant", "Primate", "Rodent", "Slug", "Snake", "Spider", "Squid", "Stone", "Swarm", "Specter", "Undead", "Worm"]
        ],
        'power': [
            ["Acid spray", "Berserker rage", "Blinding spark", "Clone self", "Crystal shield", "Darkness wrap", "Earthquake", "Energy beam", "Fear aura", "Fire breath", "Flame aura", "Ice shards", "Illusions", "Inferno swirl", "Lava spew", "Lightning bolt", "Magnetic pull", "Mind blast", "Mirage creation", "Mist form", "Nature's command", "Necrotic touch", "Paralysis sting", "Poison fangs", "Psychic scream", "Regeneration", "Sandstorm", "Shadow walk", "Shape shifting", "Sonic boom", "Soul drain", "Spawn minions", "Telekinesis", "Time warp", "Toxic spores", "Weather control"]
        ],
        'feature': [
            ["Adhesive secretions", "Barbed tail", "Bioluminescent spots", "Chameleon skin", "Corrosive saliva", "Elongated neck", "Enormous pincers", "Exoskeleton frame", "Ferocious roar", "Glowing fur", "Haunting melody", "Iridescent feathers", "Ivory tusks", "Membrane wings", "Multiple eyes", "Multiple limbs", "Multiple mouths", "Multiple rows of teeth", "Multiple tentacles", "Noxious stench", "Prehensile tail", "Prehensile tongue", "Pungent aroma", "Reflective skin", "Retractable claws", "Retractable trunk", "Sharp scales", "Spiky shell", "Spiraling horns", "Sticky mucus", "Suction cups", "Symbiotic organisms", "Telescopic limbs", "Transparent shell", "Vaporous exhale", "Venomous thorns"]
        ],
        'action': [
            ["Attack", "Blast", "Blind", "Charge", "Constrict", "Control", "Crush", "Curse", "Defend", "Dissolve", "Distract", "Dodge", "Enchant", "Engulf", "Evade", "Explode", "Feint", "Flank", "Grapple", "Growl", "Intimidate", "Lash", "Lunge", "Maneuver", "Mimic", "Paralyze", "Parry", "Pounce", "Rip", "Slash", "Snap", "Strike", "Stun", "Tear", "Thrash", "Trample"],
            ["Adaptation", "Agility", "Camouflage", "Coercion", "Cunning", "Deception", "Distraction", "Fear", "Guile", "Imitation", "Improvisation", "Ingenuity", "Instinct", "Intimidation", "Knowledge", "Magic", "Manipulation", "Observation", "Patience", "Persistence", "Resilience", "Sacrifice", "Scheming", "Sorcery", "Speed", "Stealth", "Strategy", "Strength", "Subterfuge", "Surprise", "Technology", "Tenacity", "Terrain", "Trickery", "Violence", "Weapons"]
        ]
    }
};

// Roll on arrays and return em dashed result
function getRandomResult(section, entry){

    // Validate parameters
    if(!OPTIONS.hasOwnProperty(section)){
        return 'Invalid Section';
    }
    if(!OPTIONS[section].hasOwnProperty(entry)){
        return 'Invalid Entry';
    }

    // Loop over each array within the entry to build the result
    var parts = OPTIONS[section][entry].length;
    var result = '';
    for(var part = 0; part < parts; part++){

        // Roll on individual result array and add to our final result
        var roll = Math.floor(Math.random() * OPTIONS[section][entry][part].length);

        // Add the rolled part to the result
        result += OPTIONS[section][entry][part][roll] + '—';
    }

    // Remove the ending em dash and return the result
    return result.slice(0, -1);
}