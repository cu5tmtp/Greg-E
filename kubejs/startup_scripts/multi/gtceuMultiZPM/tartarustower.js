GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("tartarustower")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("tartarustower", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("tartarustower")
    .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("bbbbbaaaaabbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("bbbaaaaaaaaabbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("bbaaaaaaaaaaabb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbdbbbbbdbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("baaaaaaaaaaaaab", "bbbdccbbbccdbbb", "bbbdcdbbbdcdbbb", "bbbdcbbbbbcdbbb", "bbbccbbbbbccbbb", "bbbcdbbbbbdcbbb", "bbbcbbbcbbbcbbb", "bbbcbbbcbbbcbbb", "bbbcbbbcbbbcbbb", "bbbcbbcecbbcbbb", "bbbdbcbcbcbdbbb", "bbbccbbcbbccbbb", "bbbcbbbcbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbebbbbbbbebbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("baaaaaaaaaaaaab", "bbccccbbbccccbb", "bbcccdbbbdcccbb", "bbccdbbbbbdccbb", "bbccbbbbbbbccbb", "bbcdbbbbbbbdcbb", "bbcbbbbbbbbbcbb", "bbdbbbbbbbbbdbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbcbbbbbbbcbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbcbbbbbcbbbb", "bbbbbcbbbcbbbbb", "bbbbbbcccbbbbbb", "bbbbbbbcbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("aaaaaaaaaaaaaaa", "bbbccbbbbbccbbb", "bbbddbbbbbddbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbbbbbbbbb", "bbbcbbbbbbbcbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbcbbbbbcbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbcbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("aaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbdbdbbbbbb", "bbbbbbdbdbbbbbb", "bbbcbbbbbbbcbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbcbbbbbcbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbcbcbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("aaaaaaaaaaaaaaa", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbdbdbbbbbb", "bbbbbbdbdbbbbbb", "bbbbbbdbdbbbbbb", "bbbcbbdbdbbcbbb", "bbbcbdbbbdbcbbb", "bbbcbdbbbdbcbbb", "bbbebbbbbbbebbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbbbbbfbbbbbbb", "bbbbbbbfbbbbbbb", "bbbbbbbfbbbbbbb", "bbbbbbbfbbbbbbb", "bbbbcbbfbbcbbbb", "bbbbcbbfbbcbbbb", "bbbbbcbfbcbbbbb", "bbbbbbbfbbbbbbb", "bbbbbbbfbbbbbbb", "bbbbbbbfbbbbbbb", "bbbbbbbfbbbbbbb", "bbbbbbbfbbbbbbb", "bbbbbbbfbbbbbbb")
        .aisle("aaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbdbdbbbbbb", "bbbbbbdbdbbbbbb", "bbbcbbbbbbbcbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbcbbbbbcbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbcbcbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("aaaaaaaaaaaaaaa", "bbbccbbbbbccbbb", "bbbddbbbbbddbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbdbbbbbbb", "bbbbbbbbbbbbbbb", "bbbcbbbbbbbcbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbcbbbbbcbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbcbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("baaaaaaaaaaaaab", "bbccccbbbccccbb", "bbcccdbbbdcccbb", "bbccdbbbbbdccbb", "bbccbbbbbbbccbb", "bbcdbbbbbbbdcbb", "bbcbbbbbbbbbcbb", "bbdbbbbbbbbbdbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbcbbbbbbbcbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbcbbbbbcbbbb", "bbbbbcbbbcbbbbb", "bbbbbbcccbbbbbb", "bbbbbbbcbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("baaaaaaaaaaaaab", "bbbdccbbbccdbbb", "bbbdcdbbbdcdbbb", "bbbdcbbbbbcdbbb", "bbbccbbbbbccbbb", "bbbcdbbbbbdcbbb", "bbbcbbbcbbbcbbb", "bbbcbbbcbbbcbbb", "bbbcbbbcbbbcbbb", "bbbcbbcecbbcbbb", "bbbdbcbcbcbdbbb", "bbbccbbcbbccbbb", "bbbcbbbcbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbcbbbbbbbcbbb", "bbbebbbbbbbebbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("bbaaaaaaaaaaabb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbcbbbbbcbbbb", "bbbbdbbbbbdbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("bbbaaaaaaaaabbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("bbbbbaajaabbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")

        .where("a", Predicates.blocks("gtceu:stress_proof_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))) 
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("kubejs:machine_casing_block_diamond"))
        .where("d", Predicates.blocks("kubejs:machine_casing_block_dark_blue"))
        .where("e", Predicates.blocks("kubejs:machine_casing_block_red"))
        .where("f", Predicates.blocks("kubejs:machine_casing_block_gold"))
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/stress_proof_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});