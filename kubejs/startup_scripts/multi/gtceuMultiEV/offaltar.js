GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("offaltar")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(9, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("offaltar", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('offaltar')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("KKK#####KKK", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########")
        .aisle("KAAKKKKKAAK", "#B#######B#", "#B#######B#", "#B#######B#", "#BI#####IB#", "#JJI#G#IJJ#", "####III####", "#####J#####", "###########")
        .aisle("KAACCCCCAAK", "###########", "###########", "###########", "#I#######I#", "#J#######J#", "###########", "#####I#####", "###########")
        .aisle("#KCCCCCCCK#", "###########", "###########", "###########", "###########", "#I#######I#", "###########", "#####I#####", "#####J#####")
        .aisle("#KCCDEDCCK#", "###########", "###########", "###########", "###########", "###########", "#I#######I#", "###########", "#####I#####")
        .aisle("#KCCEEECCK#", "#####F#####", "###########", "###########", "#####G#####", "#G###H###G#", "#I###H###I#", "#JII#H#IIJ#", "###JIIIJ###")
        .aisle("#KCCDEDCCK#", "###########", "###########", "###########", "###########", "###########", "#I#######I#", "###########", "#####I#####")
        .aisle("#KCCCCCCCK#", "###########", "###########", "###########", "###########", "#I#######I#", "###########", "#####I#####", "#####J#####")
        .aisle("KAACCCCCAAK", "###########", "###########", "###########", "#I#######I#", "#J#######J#", "###########", "#####I#####", "###########")
        .aisle("KAAKKLKKAAK", "#B#######B#", "#B#######B#", "#B#######B#", "#BI#####IB#", "#JJI#G#IJJ#", "####III####", "#####J#####", "###########")
        .aisle("KKK#####KKK", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########")
        .where("A", Predicates.blocks('minecraft:polished_blackstone_bricks'))
        .where("B", Predicates.blocks('minecraft:reinforced_deepslate'))
        .where("C", Predicates.blocks('minecraft:chiseled_deepslate'))
        .where("D", Predicates.blocks('minecraft:chiseled_polished_blackstone'))
        .where("E", Predicates.blocks('minecraft:blackstone'))
        .where("F", Predicates.blocks('botania:runic_altar'))
        .where("G", Predicates.blocks('minecraft:lantern'))
        .where("H", Predicates.blocks('minecraft:chain'))
        .where("I", Predicates.blocks('minecraft:polished_deepslate'))
        .where("J", Predicates.blocks('minecraft:polished_deepslate_slab'))
        .where("K", Predicates.blocks('minecraft:polished_blackstone_bricks')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where("L", Predicates.controller(Predicates.blocks(definition.get())))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      'minecraft:block/polished_blackstone_bricks',
      'gtceu:block/multiblock/distillation_tower'
    );
});
