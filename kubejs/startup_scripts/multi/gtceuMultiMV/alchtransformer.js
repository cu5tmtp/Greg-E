GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("alchtransformer")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("alchtransformer", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("alchtransformer")
    .appearanceBlock(() => new Block.getBlock("kubejs:machine_casing_tiled_dark_gray"))
    .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('AAAAAAA', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A')
        .aisle('AB###BA', '#######', '#######', '#######', '#######', '#######', 'A#####A')
        .aisle('A#CCC#A', '##DDD##', '##DDD##', '#######', '#######', '#######', 'A#####A')
        .aisle('A#CGC#A', '##D#D##', '##D#D##', '#######', '###F###', '###E###', 'AAAAAAA')
        .aisle('A#CCC#A', '##DDD##', '##DDD##', '#######', '#######', '#######', 'A#####A')
        .aisle('AB###BA', '#######', '#######', '#######', '#######', '#######', 'A#####A')
        .aisle('AAAIAAA', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'A#####A')
        .where("A", Predicates.blocks('kubejs:machine_casing_tiled_dark_gray')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("B", Predicates.blocks('chisel_chipped_integration:technical_transparent_rusty_scaffold'))
        .where("C", Predicates.blocks('chisel_chipped_integration:technical_vent'))
        .where("D", Predicates.blocks('chisel_chipped_integration:metal_gold_shipping_crate'))
        .where("E", Predicates.blocks('minecraft:chain'))
        .where("F", Predicates.blocks('minecraft:cauldron'))
        .where("G", Predicates.blocks('kubejs:heatingel'))
        .where("I", Predicates.controller(Predicates.blocks(definition.get())))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/ctm/machine_casing_tiled_dark_gray",
      "gtceu:block/multiblock/distillation_tower"
    );
});