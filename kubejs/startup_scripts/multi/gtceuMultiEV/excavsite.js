GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("excavsite")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(9, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MORTAR_TOOL);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("excavsite", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('excavsite')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("DEEEEEEEEEEED", "DEEEEEEEEEEED", "DEEEEEEEEEEED", "DIIIIIIIIIIID", "C###########C")
        .aisle("EGGGGGGGGGGGE", "EBBBBBFFFAAAE", "EBBB##F###AAE", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EBBBBBF###BBE", "EBB########AE", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EBBBBFF#H##BE", "EB#########AE", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EBBFFFF####BE", "E##########AE", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EAAAAFFFAAAAE", "E##########AE", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EAAAAAAFAABAE", "EAA########BE", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EAAAAAAFBBBBE", "EAAAA#####BBE", "I###########I", "#############")
        .aisle("DEEEEEEEEEEED", "DEEEEEEEEEEED", "DEEEEEKEEEEED", "DIIIIIIIIIIID", "C###########C")
        .where("A", Predicates.blocks('minecraft:sand'))
        .where("B", Predicates.blocks('minecraft:red_sand'))
        .where("C", Predicates.blocks('minecraft:lantern'))
        .where("D", Predicates.blocks('minecraft:oak_log'))
        .where("E", Predicates.blocks('minecraft:oak_planks')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where("F", Predicates.blocks('minecraft:gravel'))
        .where("G", Predicates.blocks('minecraft:cobblestone'))
        .where("H", Predicates.blocks('minecraft:decorated_pot'))
        .where("I", Predicates.blocks('minecraft:oak_fence'))          
        .where("K", Predicates.controller(Predicates.blocks(definition.get())))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      'minecraft:block/oak_planks',
      'gtceu:block/multiblock/distillation_tower'
    );

});
