GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("giantesssmelter")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(1, 0, 1, 1)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("giantesssmelter", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("giantesssmelter")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("bbbbbbcccbbbbbb", "bbbbbbdddbbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbfffbbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb")
        .aisle("baaabceeecbaaab", "bgggbdbbbdbgggb", "bgggbebbbebgggb", "baaabebbbebaaab", "bbbbbebbbebbbbb", "bbbbbfbbbfbbbbb", "bbbbbebbbebbbbb", "bbbbbebbbebbbbb", "bbbbbebbbebbbbb", "bbbbbebbbebbbbb", "bbbbbehhhebbbbb")
        .aisle("baaabceeecbaaab", "bgbgbdbbbdbgbgb", "bgbgbebbbebgbgb", "baiabebbbebaiab", "bbibbebbbebbibb", "bbjiiibbbiiijbb", "bbibbebbbebbibb", "bbibbebbbebbibb", "bbibbebbbebbibb", "bbhbbebbbebbhbb", "bbbbbehkhebbbbb")
        .aisle("baaabceeecbaaab", "bgggbdbbbdbgggb", "bgggbebbbebgggb", "baaabebbbebaaab", "bbbbbebbbebbbbb", "bbbbbfbbbfbbbbb", "bbbbbebbbebbbbb", "bbbbbebbbebbbbb", "bbbbbebbbebbbbb", "bbbbbebbbebbbbb", "bbbbbehhhebbbbb")
        .aisle("bbbbbbcccbbbbbb", "bbbbbbdddbbbbbb", "bbbbbbelebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbfffbbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb", "bbbbbbeeebbbbbb")
        .where("a", Predicates.blocks("gtceu:nonconducting_casing"))
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("gregecore:ptfe_firebox_casing"))
        .where("d", Predicates.blocks("gtceu:rtm_alloy_coil_block"))
        .where("e", Predicates.blocks("gtceu:inert_machine_casing")
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where("f", Predicates.blocks("gregecore:ptfe_engine_intake"))
        .where("g", Predicates.blocks("gtceu:tempered_glass"))
        .where("h", Predicates.blocks("gtceu:filter_casing"))
        .where("i", Predicates.blocks("gtceu:clean_machine_casing"))
        .where("j", Predicates.blocks("gtceu:stainless_steel_gearbox"))
        .where("k", Predicates.abilities(PartAbility.MUFFLER))
        .where('l', Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/solid/machine_casing_inert_ptfe",
      "gtceu:block/multiblock/distillation_tower"
    );
});