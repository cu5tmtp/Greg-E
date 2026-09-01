GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("biocomponents")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 1, 3, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("biocomponents", "multiblock")
    .rotationState(RotationState.ALL)
    .recipeType('biocomponents')
    .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("abbbbbbba", "aaaacaaaa", "aaddcddaa", "aaaacaaaa", "aaaaeaaaa", "aaaaeaaaa", "aaaaeaaaa", "aaaacaaaa", "aaddcddaa", "aaaacaaaa", "abbbbbbba")
        .aisle("befgfgfeb", "adaacaada", "aaaaeaaaa", "aaaaeaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaeaaaa", "aaaaeaaaa", "adaacaada", "befgfgfeb")
        .aisle("bfhfffhfb", "aaaaeaaaa", "daaaaaaad", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "daaaaaaad", "aaaaeaaaa", "bfhfffhfb")
        .aisle("bgfefefgb", "aaaaaaaaa", "daaaaaaad", "aaaaaaaaa", "aaaaaaaaa", "aaaagaaaa", "aaaaaaaaa", "aaaaaaaaa", "daaaaaaad", "aaaaaaaaa", "bgfefefgb")
        .aisle("bfffefffb", "cceadaecc", "ceaadaaec", "ceaagaaec", "eaaagaaae", "eaagggaae", "eaaagaaae", "ceaagaaec", "ceaadaaec", "cceadaecc", "bfffefffb")
        .aisle("bgfefefgb", "aaaaaaaaa", "daaaaaaad", "aaaaaaaaa", "aaaaaaaaa", "aaaagaaaa", "aaaaaaaaa", "aaaaaaaaa", "daaaaaaad", "aaaaaaaaa", "bgfefefgb")
        .aisle("bfhfffhfb", "aaaaeaaaa", "daaaaaaad", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "daaaaaaad", "aaaaeaaaa", "bfhfffhfb")
        .aisle("befgfgfeb", "adaacaada", "aaaaeaaaa", "aaaaeaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaeaaaa", "aaaaeaaaa", "adaacaada", "befgfgfeb")
        .aisle("abbbjbbba", "aaaacaaaa", "aaddcddaa", "aaaacaaaa", "aaaaeaaaa", "aaaaeaaaa", "aaaaeaaaa", "aaaacaaaa", "aaddcddaa", "aaaacaaaa", "abbbbbbba")

        .where("a", Predicates.any())
        .where("b", Predicates.blocks("gtceu:inert_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("c", Predicates.blocks("kubejs:machine_casing_tiled_gray"))
        .where("d", Predicates.blocks("gtceu:hastelloy_c_276_frame"))
        .where("e", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("f", Predicates.blocks("kubejs:machine_casing_block_green"))
        .where("g", Predicates.blocks("gtceu:superconducting_coil"))
        .where("h", Predicates.blocks("gtceu:white_lamp"))
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'gtceu:block/casings/solid/machine_casing_inert_ptfe',
      'gtceu:block/multiblock/distillation_tower'
    );
});
