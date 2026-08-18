GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("tectonicdisruptor")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("tectonicdisruptor", "multiblock")
    .rotationState(RotationState.ALL)
    .recipeType('tectonicdisruptor')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aaaabaaaa", "accbbbcca", "acbbbbbca", "abbbbbbba", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb")
        .aisle("accbbbcca", "cdbbbbbdc", "cbbbbbbbc", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb")
        .aisle("acbbbbbca", "cbbbbbbbc", "bbdbbbdbb", "bbdbbbdbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbebbbb", "bbbbebbbb", "bbbbebbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb")
        .aisle("abbbbbbba", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbdedbbb", "bbbdedbbb", "bbbfffbbb", "bbbebebbb", "bbbgbgbbb", "bbbeeebbb", "bbbhbhbbb", "bbbbbbbbb", "bbbbbbbbb")
        .aisle("bbbbbbbbb", "bbbbibbbb", "bbbbebbbb", "bbbbebbbb", "bbbeeebbb", "bbbebebbb", "bbbfbfbbb", "bbebbbebb", "bbebbbebb", "bbeeeeebb", "bbbbfbbbb", "bbbbhbbbb", "bbbbhbbbb")
        .aisle("abbbbbbba", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbdJdbbb", "bbbdedbbb", "bbbfffbbb", "bbbebebbb", "bbbgbgbbb", "bbbeeebbb", "bbbhbhbbb", "bbbbbbbbb", "bbbbbbbbb")
        .aisle("acbbbbbca", "cbbbbbbbc", "bbdbbbdbb", "bbdbbbdbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbebbbb", "bbbbebbbb", "bbbbebbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb")
        .aisle("accbbbcca", "cdbbbbbdc", "cbbbbbbbc", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb")
        .aisle("aaaabaaaa", "accbbbcca", "acbbbbbca", "abbbbbbba", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb")
        .where("a", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("kubejs:machine_casing_tiled_green"))
        .where("d", Predicates.blocks("kubejs:machine_casing_tiled_orange"))
        .where("e", Predicates.blocks("kubejs:machine_casing_block_gold")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("f", Predicates.blocks("gtceu:superconducting_coil"))
        .where("g", Predicates.blocks("gtceu:bronze_gearbox"))
        .where("h", Predicates.blocks("kubejs:machine_casing_block_magenta"))
        .where("i", Predicates.blocks("gregecore:ptfe_engine_intake"))
        .where("J", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'kubejs:block/ctm/machine_casing_block_gold',
      'gtceu:block/multiblock/distillation_tower'
    );
});
