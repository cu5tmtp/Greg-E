GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("giant_squeezer")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("giant_squeezer", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("giant_squeezer")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("#BBB#", "#BFB#", "#BFB#", "#GGG#")
        .aisle("BAAAB", "B###B", "B###B", "BAAAB")
        .aisle("BAAAB", "F#C#F", "F###F", "BAAAB")
        .aisle("BAAAB", "B###B", "B###B", "BAAAB")
        .aisle("#BEB#", "#BFB#", "#BFB#", "#GGG#")
        .where("A", Predicates.blocks("chisel_chipped_integration:technical_exhaust_plating"))
        .where("B", Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("C", Predicates.blocks("kubejs:slurry_squeezer"))           
        .where("E", Predicates.controller(Predicates.blocks(definition.get())))
        .where("F", Predicates.blocks("minecraft:glass"))
        .where("G", Predicates.blocks("chisel_chipped_integration:technical_fan"))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      "gtceu:block/casings/solid/machine_casing_solid_steel",
      "gtceu:block/multiblock/implosion_compressor"
    );
});
