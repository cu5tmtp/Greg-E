GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("alchtransformer")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("alchtransformer", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("alchtransformer")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('AHHHHHA', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A',)
        .aisle('HB###BH', '#######', '#######', '#######', '#######', '#######', 'A#####A',)
        .aisle('H#CCC#H', '##DDD##', '##DDD##', '#######', '#######', '#######', 'A#####A',)
        .aisle('H#CGC#H', '##D#D##', '##D#D##', '#######', '###F###', '###E###', 'AAAAAAA',)
        .aisle('H#CCC#H', '##DDD##', '##DDD##', '#######', '#######', '#######', 'A#####A',)
        .aisle('HB###BH', '#######', '#######', '#######', '#######', '#######', 'A#####A',)
        .aisle('AHHIHHA', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A',)
        .where("A", Predicates.blocks('chisel_chipped_integration:technical_rusty_bolted_plates'))
        .where("B", Predicates.blocks('chisel_chipped_integration:technical_transparent_rusty_scaffold'))
        .where("C", Predicates.blocks('chisel_chipped_integration:technical_vent'))
        .where("D", Predicates.blocks('chisel_chipped_integration:metal_gold_shipping_crate'))
        .where("E", Predicates.blocks('minecraft:chain'))
        .where("F", Predicates.blocks('minecraft:cauldron'))
        .where("G", Predicates.blocks('kubejs:heatingel'))
        .where("H", Predicates.blocks('chisel_chipped_integration:technical_rusty_bolted_plates')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))  
        .where("I", Predicates.controller(Predicates.blocks(definition.get())))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/chisel/rustyboltedplates",
      "gtceu:block/multiblock/distillation_tower"
    );
});