GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("linearaccel")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("linearaccel", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("linearaccel")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('EEEEEEEEEEEEE', '#############', '#############')
        .aisle('EAAAAAAAAAAAE', '###CCC#CC#C##', '#############')
        .aisle('EAAAAAAAAAAAE', '#B#########B#', '#D#GGG#GG#GB#')
        .aisle('EAAAAAAAAAAAE', '###CCC#CC#C##', '#############')
        .aisle('EFEEEEEEEEEEE', '#############', '#############')
        .where("A", Predicates.blocks('chisel_chipped_integration:technical_exhaust_plating'))
        .where("B", Predicates.blocks('chisel_chipped_integration:laboratory_small_steel'))
        .where("C", Predicates.blocks('chisel_chipped_integration:technical_transparent_rusty_scaffold'))
        .where('D', Predicates.blocks('minecraft:target'))   
        .where('E', Predicates.blocks('chisel_chipped_integration:laboratory_tiles')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))  
        .where('F', Predicates.controller(Predicates.blocks(definition.get())))
        .where('G', Predicates.blocks('gregecore:linearaccelerator'))
        .where('#', Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/chisel/largetile",
      "gtceu:block/multiblock/distillation_tower"
    );
});