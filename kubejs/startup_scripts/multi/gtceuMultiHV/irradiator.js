GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("irradiator")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("irradiator", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("irradiator")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('HHHHHHHHHH', 'AAAAAAAAAA', 'AAAAAAAAAA', 'AAAAAAAAAA', 'AAAAAAAAAA')
        .aisle('HAAAAAAAAH', 'D########D', 'D##GGGG##D', 'D########D', 'AAAAAAAAAA')
        .aisle('HAAAAAAAAH', 'DBEEEEEEBD', 'DF######FD', 'D########D', 'AAAAAAAAAA')
        .aisle('HCCCCCCCCH', 'D########D', 'D########D', 'D########D', 'AAAAAAAAAA')
        .aisle('HIHHHHHHHH', 'ADDDDDDDDA', 'ADDDDDDDDA', 'ADDDDDDDDA', 'AAAAAAAAAA')
        .where("A", Predicates.blocks('chisel_chipped_integration:factory_grinder'))
        .where('B', Predicates.blocks('chisel_chipped_integration:laboratory_large_steel'))  
        .where('C', Predicates.blocks('chisel_chipped_integration:factory_yellow_black_caution_stripes')) 
        .where('D', Predicates.blocks('connectedglass:clear_glass'))    
        .where('E', Predicates.blocks('gregecore:conveyorbelt'))   
        .where('F', Predicates.blocks('gregecore:itemtranslocator')) 
        .where('G', Predicates.blocks('gtceu:uranium_block'))
        .where('H', Predicates.blocks('chisel_chipped_integration:factory_grinder')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))  
        .where('I', Predicates.controller(Predicates.blocks(definition.get())))
        .where('#', Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/chisel/grinder",
      "gtceu:block/multiblock/distillation_tower"
    );
});