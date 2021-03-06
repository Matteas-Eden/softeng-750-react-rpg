import BackpackUpgrade from './other/backpack-upgrade';
import LeatherArmor from './clothes/armor/leather-armor';
import LeatherBoots from './clothes/armor/leather-boots';
import LeatherCap from './clothes/armor/leather-cap';
import LeatherGloves from './clothes/armor/leather-gloves';
import LeatherPants from './clothes/armor/leather-pants';
import IronArmor from './clothes/armor/iron-armor';
import IronBoots from './clothes/armor/iron-boots';
import IronHelm from './clothes/armor/iron-helm';
import IronGloves from './clothes/armor/iron-gloves';
import IronPants from './clothes/armor/iron-pants';
import SteelArmor from './clothes/armor/steel-armor';
import SteelBoots from './clothes/armor/steel-boots';
import SteelHelm from './clothes/armor/steel-helm';
import SteelGloves from './clothes/armor/steel-gloves';
import SteelPants from './clothes/armor/steel-pants';
import MithrilArmor from './clothes/armor/mithril-armor';
import MithrilBoots from './clothes/armor/mithril-boots';
import MithrilHelm from './clothes/armor/mithril-helm';
import MithrilGloves from './clothes/armor/mithril-gloves';
import MithrilPants from './clothes/armor/mithril-pants';
import BlackRobes from './clothes/robes/black-robes';
import BrownRobes from './clothes/robes/brown-robes';
import RedRobes from './clothes/robes/red-robes';
import TealRobes from './clothes/robes/teal-robes';
import SkullRobes from './clothes/robes/skull-robes';
import OldRing from './rings/old-ring';
import AmethystRing from './rings/amethyst-ring';
import SaphireRing from './rings/saphire-ring';
import DiamondRing from './rings/diamond-ring';
import BroadSword from './weapons/swords/broad-sword';
import RustySword from './weapons/swords/rusty-sword';
import SteelSword from './weapons/swords/steel-sword';
import DragonsBane from './weapons/swords/dragons-bane';
import LichBane from './weapons/swords/lich-bane';
import BlackStaff from './weapons/staffs/black-staff';
import BrownStaff from './weapons/staffs/brown-staff';
import RedStaff from './weapons/staffs/red-staff';
import TealStaff from './weapons/staffs/teal-staff';
import SkullStaff from './weapons/staffs/skull-staff';
import Boomerang from './weapons/ranged/boomerang';
import Slingshot from './weapons/ranged/slingshot';
import HellsPhoenix from './weapons/ranged/hells-phoenix';
import PhantasmCrossbow from './weapons/ranged/crossbow';
import MidnightsFury from './weapons/ranged/midnights-fury';
import HpPotion from './potions/hp-potion';
import GreatHpPotion from './potions/great-hp-potion';
import MightyHpPotion from './potions/mighty-hp-potion';
import DivineHpPotion from './potions/divine-hp-potion';
import MpPotion from './potions/mp-potion';
import GreatMpPotion from './potions/great-mp-potion';
import MightyMpPotion from './potions/mighty-mp-potion';
import DivineMpPotion from './potions/divine-mp-potion';

const items = {
    weapons: {
        swords: {
            RustySword,
            SteelSword,
            BroadSword,
            DragonsBane,
            LichBane,
        },
        ranged: {
            Boomerang,
            Slingshot,
            HellsPhoenix,
            PhantasmCrossbow,
            MidnightsFury,
        },
        staffs: {
            BlackStaff,
            BrownStaff,
            RedStaff,
            TealStaff,
            SkullStaff,
        },
    },
    clothes: {
        armor: {
            leather: {
                LeatherArmor,
                LeatherBoots,
                LeatherCap,
                LeatherGloves,
                LeatherPants,
            },
            iron: {
                IronArmor,
                IronBoots,
                IronHelm,
                IronGloves,
                IronPants,
            },
            steel: {
                SteelArmor,
                SteelBoots,
                SteelHelm,
                SteelGloves,
                SteelPants,
            },
            mithril: {
                MithrilArmor,
                MithrilBoots,
                MithrilHelm,
                MithrilGloves,
                MithrilPants,
            },
        },
        robes: {
            BlackRobes,
            BrownRobes,
            RedRobes,
            TealRobes,
            SkullRobes,
        },
    },
    rings: {
        OldRing,
        AmethystRing,
        SaphireRing,
        DiamondRing,
    },
    potions: {
        HpPotion,
        GreatHpPotion,
        MpPotion,
        GreatMpPotion,
        MightyHpPotion,
        DivineHpPotion,
        MightyMpPotion,
        DivineMpPotion,
    },
    other: {
        BackpackUpgrade,
    },
};

export const leatherEquipment = [
    LeatherCap,
    LeatherArmor,
    LeatherGloves,
    LeatherPants,
    LeatherBoots,
];

export const ironEquipment = [
    IronHelm,
    IronArmor,
    IronGloves,
    IronPants,
    IronBoots,
];

export const steelEquipment = [
    SteelHelm,
    SteelArmor,
    SteelGloves,
    SteelPants,
    SteelBoots,
];

export const mithrilEquipment = [
    MithrilHelm,
    MithrilArmor,
    MithrilGloves,
    MithrilPants,
    MithrilBoots,
];

export const randomItemsT1 = [
    ...leatherEquipment,
    BlackRobes,
    BrownRobes,
    SteelSword,
    Slingshot,
    BrownStaff,
    OldRing,
];

export const randomItemsT2 = [
    ...ironEquipment,
    RedRobes,
    BroadSword,
    HellsPhoenix,
    RedStaff,
    AmethystRing,
];

export const randomItemsT3 = [
    ...steelEquipment,
    RedRobes,
    TealRobes,
    BroadSword,
    DragonsBane,
    HellsPhoenix,
    PhantasmCrossbow,
    RedStaff,
    TealStaff,
    SaphireRing,
];

export const randomItemsT4 = [
    ...mithrilEquipment,
    SkullRobes,
    LichBane,
    MidnightsFury,
    SkullStaff,
    DiamondRing,
];

export default items;
