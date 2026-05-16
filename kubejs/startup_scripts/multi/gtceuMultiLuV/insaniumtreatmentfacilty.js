GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("insaniumtreatmentfacilty")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("insaniumtreatmentfacilty", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("insaniumtreatmentfacilty")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaeeeaaa", "aaaaaaaaaa", "aaaaaaaaaa")
        .aisle("aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaeaaaeaa", "aaaaaaaaaa", "aaaaaaaaaa")
        .aisle("aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaadaaaa", "aaeaadaaea", "aaaaadaaaa", "aaaaacaaaa")
        .aisle("aaaaiiiaaa", "aaaafgfaaa", "aaaafffaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaadaaaa", "aaaaadaaaa", "aaaadadaaa", "aeaadadaae", "aaaadadaaa", "aaaacccaaa")
        .aisle("aaaaiiiaaa", "aaaagagaaa", "aaaafdfaaa", "aaaaaaaaaa", "aaaaadaaaa", "aaaaadaaaa", "aaaadadaaa", "aaaadadaaa", "aaadaaadaa", "aeadaaadae", "aaadaaadaa", "aaacccccaa")
        .aisle("aaaaihiaaa", "aaaafgfaaa", "aaaafffaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaadaaaa", "aaaaadaaaa", "aaaadadaaa", "aeaadadaae", "aaaadadaaa", "aaaacccaaa")
        .aisle("aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaadaaaa", "aaeaadaaea", "aaaaadaaaa", "aaaaacaaaa")
        .aisle("aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaeaaaeaa", "aaaaaaaaaa", "aaaaaaaaaa")
        .aisle("aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaeeeaaa", "aaaaaaaaaa", "aaaaaaaaaa")
        .where("a", Predicates.any())
        .where("b", Predicates.blocks("gtceu:sturdy_machine_casing"))
        .where("c", Predicates.blocks("gtceu:vibration_safe_casing"))
        .where("d", Predicates.blocks("gtceu:nichrome_coil_block"))
        .where("e", Predicates.blocks("gtceu:shock_proof_cutting_casing"))
        .where("f", Predicates.blocks("gtceu:inert_machine_casing"))
        .where("g", Predicates.blocks("gregecore:ptfe_engine_intake"))
        .where('h', Predicates.controller(Predicates.blocks(definition.get())))
        .where('i', Predicates.blocks('gtceu:nonconducting_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2)))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/solid/machine_casing_inert_ptfe",
      "gtceu:block/multiblock/distillation_tower"
    );
});