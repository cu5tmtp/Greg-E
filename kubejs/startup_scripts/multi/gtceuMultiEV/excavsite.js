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
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("DEEEEEEEEEEED", "DEEEEEEEEEEED", "DJJJJJJJJJJJD", "DIIIIIIIIIIID", "C###########C")
        .aisle("EGGGGGGGGGGGE", "EBBBBBFFFAAAE", "JBBB##F###AAJ", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EBBBBBF###BBE", "JBB########AJ", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EBBBBFF#H##BE", "JB#########AJ", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EBBFFFF####BE", "J##########AJ", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EAAAAFFFAAAAE", "J##########AJ", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EAAAAAAFAABAE", "JAA########BJ", "I###########I", "#############")
        .aisle("EGGGGGGGGGGGE", "EAAAAAAFBBBBE", "JAAAA#####BBJ", "I###########I", "#############")
        .aisle("DEEEEEEEEEEED", "DEEEEEEEEEEED", "DJJJJJKJJJJJD", "DIIIIIIIIIIID", "C###########C")
        .where("A", Predicates.blocks('minecraft:sand'))
        .where("B", Predicates.blocks('minecraft:red_sand'))
        .where("C", Predicates.blocks('minecraft:lantern'))
        .where("D", Predicates.blocks('minecraft:oak_log'))
        .where("E", Predicates.blocks('minecraft:oak_planks'))
        .where("F", Predicates.blocks('minecraft:gravel'))
        .where("G", Predicates.blocks('minecraft:cobblestone'))
        .where("H", Predicates.blocks('minecraft:decorated_pot'))
        .where("I", Predicates.blocks('minecraft:oak_fence'))
        .where("J", Predicates.blocks('minecraft:oak_planks')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where("K", Predicates.controller(Predicates.blocks(definition.get())))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      'minecraft:block/oak_planks',
      'gtceu:block/multiblock/distillation_tower'
    );

});
