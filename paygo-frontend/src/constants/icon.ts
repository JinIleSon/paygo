import { IconBackpack, IconCoffee, IconDeviceLaptop, IconHeadphones, IconShirt, IconShoe, IconTent, IconYoga } from "@tabler/icons-react";

export const iconMap = {
    IconShoe,
    IconHeadphones,
    IconTent,
    IconShirt,
    IconDeviceLaptop,
    IconYoga,
    IconCoffee,
    IconBackpack
} as const;

export type IconName = keyof typeof iconMap;