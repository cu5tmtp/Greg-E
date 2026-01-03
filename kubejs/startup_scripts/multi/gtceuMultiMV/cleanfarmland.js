GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("cleanfarmland")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("cleanfarmland", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("cleanfarmland")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('BIIIIIB', 'BHHHHHB', 'BHHHHHB', 'BHHHHHB', 'BDDDDDB')
        .aisle('IEEEEEI', 'H#####H', 'H#####H', 'H#####H', 'DAAAAAD')
        .aisle('IEEEEEI', 'H#####H', 'H#####H', 'H#####H', 'DAAAAAD')
        .aisle('IEEAEEI', 'H##G##H', 'H#####H', 'H##C##H', 'DAAAAAD')
        .aisle('IEEEEEI', 'H#####H', 'H#####H', 'H#####H', 'DAAAAAD')
        .aisle('IEEEEEI', 'H#####H', 'H#####H', 'H#####H', 'DAAAAAD')
        .aisle('BIIJIIB', 'BHHFHHB', 'BHHFHHB', 'BHHHHHB', 'BDDDDDB')
        .where("A", Predicates.blocks('chisel_chipped_integration:laboratory_tiles'))
        .where("B", Predicates.blocks('chisel_chipped_integration:laboratory_medium_tiles'))
        .where("C", Predicates.blocks('chisel_chipped_integration:technical_fan'))
        .where("D", Predicates.blocks('chisel_chipped_integration:laboratory_vents'))
        .where("E", Predicates.blocks('minecraft:dirt'))
        .where("F", Predicates.blocks('minecraft:iron_door'))
        .where("G", Predicates.blocks('kubejs:sprinkler'))
        .where("H", Predicates.blocks('connectedglass:clear_glass'))
        .where("I", Predicates.blocks('chisel_chipped_integration:laboratory_tiles')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))  
        .where("J", Predicates.controller(Predicates.blocks(definition.get())))
        .where('#',Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/chisel/largetile",
      "gtceu:block/multiblock/distillation_tower"
    );
});