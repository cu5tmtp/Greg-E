GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("atomicreversator")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("atomicreversator", "multiblock")
    .rotationState(RotationState.ALL)
    .recipeType('atomicreversator')
    .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("abbbaaaaaaabbba", "aacaaaaaaaaacaa", "aacaaaaaaaaacaa", "aacaaaaaaaaacaa", "abbbaaaaaaabbba", "aacaaaaaaaaacaa", "aacaaaaaaaaacaa", "aacaaaaaaaaacaa", "abbbaaaaaaabbba", "aaaaaaaaaaaaaaa", "aaaaabaaabaaaaa", "aaaaabbbbbaaaaa", "aaaaabaaabaaaaa", "aaaaaaaaaaaaaaa")
        .aisle("bdddbaaaaabdddb", "adddaaaaaaaddda", "adddaaaaaaaddda", "adddaaaaaaaddda", "bdddbaaaaabdddb", "adddaaaaaaaddda", "adddaaaaaaaddda", "adddaaaaaaaddda", "bdddbaaaaabdddb", "addddbaaabdddda", "aadedddddddedaa", "aaadddddddddaaa", "aaaadddddddaaaa", "aaaaabaaabaaaaa")
        .aisle("bdddbaaaaabdddb", "cdadcaaaaacdadc", "cdadcaaaaacdadc", "cdadcaaaaacdadc", "bdadbaaaaabdadb", "cdadcaaaaacdadc", "cdadcaaaaacdadc", "cdadcaaaaacdadc", "bdadbaaaaabdadb", "cddddbbbbbddddc", "acdddddddddddca", "aacddaaaaaddcaa", "aaccdddddddcaaa", "aaaacbbbbbcaaaa")
        .aisle("bdddbaaaaabdddb", "adddaaaaaaaddda", "adddaaaaaaaddda", "adddaaaaaaaddda", "bdddbaaaaabdddb", "adddaaaaaaaddda", "adddaaaaaaaddda", "adddaaaaaaaddda", "bdddbaaaaabdddb", "addddbaaabdddda", "aadedddddddedaa", "aaadddddddddaaa", "aaaadddddddaaaa", "aaaaabaaabaaaaa")
        .aisle("abbbaaaaaaabbba", "aacaaaaaaaaacaa", "aacaaaaaaaaacaa", "aacaaaaaaaaacaa", "abbbaaaaaaabbbb", "aacaaaaaaaaacaa", "aacaaaaaaaaacaa", "aacaaaaaaaaacaa", "abbbaaaaaaabbbb", "aaaaaaaaaaaaaaa", "aaaaabaaabaaaaa", "aaaaabbjbbaaaaa", "aaaaabaaabaaaaa", "aaaaaaaaaaaaaaa")

        .where("a", Predicates.any())
        .where("b", Predicates.blocks("kubejs:machine_casing_tiled_orange")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("c", Predicates.blocks("gtceu:nebulon_alpha_frame"))
        .where("d", Predicates.blocks("gtceu:inert_machine_casing"))
        .where("e", Predicates.blocks("gregecore:ptfe_engine_intake"))
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'kubejs:block/ctm/machine_casing_tiled_orange',
      'gtceu:block/multiblock/distillation_tower'
    );
});
