GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("specmetheat")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("specmetheat", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("specmetheat")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("abbba", "accca", "acdca", "aacaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa")
        .aisle("bfffb", "cgggc", "caaac", "acaca", "achca", "aahaa", "aahaa", "aahaa", "aaiaa")
        .aisle("bfffb", "cgggc", "daaad", "caaac", "ahaha", "ahaha", "ahjha", "ahdha", "aiaia")
        .aisle("bfffb", "cgggc", "caaac", "acaca", "achca", "aahaa", "aahaa", "aahaa", "aaiaa")
        .aisle("abkba", "accca", "acdca", "aacaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa")
        .where("a", Predicates.any())
        .where("b", Predicates.blocks("chisel_chipped_integration:factory_circuit")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("c", Predicates.blocks("undergarden:cloggrum_block"))
        .where("d", Predicates.blocks("undergarden:cloggrum_bars"))
        .where("f", Predicates.blocks("undergarden:cloggrum_tiles"))
        .where("g", Predicates.blocks("minecraft:magma_block"))
        .where("h", Predicates.blocks("undergarden:froststeel_block"))
        .where("i", Predicates.blocks("undergarden:forgotten_block"))
        .where("j", Predicates.blocks("minecraft:campfire"))
        .where("k", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "kubejs:block/chisel/circuit",
      "gtceu:block/multiblock/distillation_tower"
    );
});