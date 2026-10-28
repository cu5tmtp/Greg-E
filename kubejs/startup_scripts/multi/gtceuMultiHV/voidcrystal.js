GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("voidcrystal")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("voidcrystalincubator")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("voidcrystal", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes(["voidcrystal", 'voidcrystalincubator'])
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('BBBBBBB', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'BBBBBBB')
        .aisle('BCCCCCB', '#######', '#######', '#######', '#######', '#######', '#######', '#######', 'BCCCCCB')
        .aisle('BCCCCCB', '#######', '#######', '###D###', '###D###', '###D###', '#######', '#######', 'BCCCCCB')
        .aisle('BCCCCCB', '#######', '###D###', '##DDD##', '##DED##', '##DDD##', '###D###', '#######', 'BCCCCCB')
        .aisle('BCCCCCB', '#######', '#######', '###D###', '###D###', '###D###', '#######', '#######', 'BCCCCCB')
        .aisle('BCCCCCB', '#######', '#######', '#######', '#######', '#######', '#######', '#######', 'BCCCCCB')
        .aisle('BBBGBBB', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'BBBBBBB')
        .where('A', Predicates.blocks('chisel_chipped_integration:technical_rusty_grate'))  
        .where('B', Predicates.blocks('chisel_chipped_integration:factory_segmented_rusty_plates')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where('C', Predicates.blocks('chisel_chipped_integration:factory_purple_wireframe'))    
        .where('D', Predicates.blocks('chisel_chipped_integration:factory_blue_framed_circuit'))   
        .where('E', Predicates.blocks('kubejs:voidseed')) 
        .where('G', Predicates.controller(Predicates.blocks(definition.get())))
        .where('#', Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/chisel/rustplates",
      "gtceu:block/multiblock/distillation_tower"
    );
});