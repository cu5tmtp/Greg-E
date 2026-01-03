GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("voidminer")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("voidminer", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("voidminer")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('EEEEE', 'EB#BE', 'B###B', 'B###B', '#BBB#', '##B##', '#####', '#####', '#####', '#####', '#####')
        .aisle('EAAAE', 'B###B', '#####', '#####', 'B#B#B', '#####', '##B##', '##B##', '#####', '#####', '#####')
        .aisle('EA#AE', '#####', '#####', '##D##', 'BBABB', 'B#A#B', '#BAB#', '#BAB#', '##B##', '##C##', '##C##')
        .aisle('EAAAE', 'B###B', '#####', '#####', 'B#B#B', '#####', '##B##', '##B##', '#####', '#####', '#####')
        .aisle('EEFEE', 'EB#BE', 'B###B', 'B###B', '#BBB#', '##B##', '#####', '#####', '#####', '#####', '#####')
        .where("A", Predicates.blocks('gtceu:solid_machine_casing'))
        .where('B', Predicates.blocks('gtceu:steel_frame'))
        .where('C', Predicates.blocks('minecraft:iron_bars'))
        .where('D', Predicates.blocks('kubejs:laservoid'))
        .where('E', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))  
        .where('F', Predicates.controller(Predicates.blocks(definition.get())))
        .where('#', Predicates.any())
    .build())
    .workableCasingModel(
      'gtceu:block/casings/solid/machine_casing_solid_steel',
      "gtceu:block/multiblock/large_miner"
    );
});