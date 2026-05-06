GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("oilrig")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(9, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.DRILL_TOOL);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("oilrig", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('oilrig')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("A###A", "A###A", "A###A", "GGGGG", "D###D", "D###D", "#DDD#", "##D##", "#####", "#####", "#####", "#####", "#####", "#####")
        .aisle("#####", "#####", "#####", "GCCCG", "#####", "#####", "D#D#D", "#####", "##D##", "##D##", "#####", "#####", "#####", "#####")
        .aisle("##E##", "##E##", "##E##", "GCECG", "##E##", "##E##", "DDEDD", "D#C#D", "#DDD#", "#DDD#", "##D##", "##D##", "##F##", "##F##")
        .aisle("#####", "#####", "#####", "GCCCG", "#####", "#####", "D#D#D", "#####", "##D##", "##D##", "#####", "#####", "#####", "#####")
        .aisle("A###A", "A###A", "A###A", "GGHGG", "D###D", "D###D", "#DDD#", "##D##", "#####", "#####", "#####", "#####", "#####", "#####")
        .where("A", Predicates.blocks('chisel_chipped_integration:technical_sturdy'))
        .where("B", Predicates.blocks('chisel_chipped_integration:technical_vent'))
        .where("C", Predicates.blocks('chisel_chipped_integration:technical_exhaust_plating'))
        .where("D", Predicates.blocks('gtceu:stainless_steel_frame'))
        .where("E", Predicates.blocks('chisel_chipped_integration:technical_large_pipes'))
        .where("F", Predicates.blocks('minecraft:iron_bars'))
        .where("G", Predicates.blocks('chisel_chipped_integration:technical_exhaust_plating')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("H", Predicates.controller(Predicates.blocks(definition.get())))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      'kubejs:block/chisel/exhaustplating',
      'gtceu:block/multiblock/distillation_tower'
    );
});
