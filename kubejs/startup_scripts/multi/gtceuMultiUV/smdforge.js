GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("smdforge")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("smdforge", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("smdforge")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aiiiiiiiiia", "bcccdcdcccb", "bcccdcdcccb", "bccdcccdccb", "bddcccccddb", "bcccceccccb", "bddcccccddb", "bccddccdccb", "bcccdcdcccb", "bcccdcdcccb", "abbbbbbbbba")
        .aisle("icccdcdccci", "caaaafaaaac", "caaaaaaaaac", "caaaaaaaaac", "daaaaaaaaad", "caaaaeaaaac", "daaaaaaaaad", "caaaaaaaaac", "caaaaaaaaac", "caaaafaaaac", "bcccdcdcccb")
        .aisle("icccdcdccci", "caaaaaaaaac", "caaaafaaaac", "caaaaaaaaac", "daaaaaaaaad", "caaaaeaaaac", "daaaaaaaaad", "caaaaaaaaac", "caaaafaaaac", "caaaaaaaaac", "bcccdcdcccb")
        .aisle("iccdcccdcci", "caaaaaaaaac", "caaaaaaaaac", "daaagggaaad", "caagcccgaac", "caagcecgaac", "caagcccgaac", "daaagggaaad", "caaaaaaaaac", "caaaaaaaaac", "bccdcccdccb")
        .aisle("iddcccccddi", "daaaaaaaaad", "daaaaaaaaad", "caagcccgaac", "caacaaacaac", "caacaaacaac", "caacaaacaac", "caagcccgaac", "daaaaaaaaad", "daaaaaaaaad", "bddcccccddb")
        .aisle("iccccecccci", "cfaaaeaaafc", "cafaaeaafac", "caagcecgaac", "caacaaacaac", "eeeeahaeeee", "caacaaacaac", "caagcecgaac", "cafaaeaafac", "cfaaaeaaafc", "bcccceccccb")
        .aisle("iddcccccddi", "daaaaaaaaad", "daaaaaaaaad", "caagcccgaac", "caacaaacaac", "caacaaacaac", "caacaaacaac", "caagcccgaac", "daaaaaaaaad", "daaaaaaaaad", "bddcccccddb")
        .aisle("iccdcccdcci", "caaaaaaaaac", "caaaaaaaaac", "daaagggaaad", "caagcccgaac", "caagcecgaac", "caagcccgaac", "daaagggaaad", "caaaaaaaaac", "caaaaaaaaac", "bccdcccdccb")
        .aisle("icccdcdccci", "caaaaaaaaac", "caaaafaaaac", "caaaaaaaaac", "daaaaaaaaad", "caaaaeaaaac", "daaaaaaaaad", "caaaaaaaaac", "caaaafaaaac", "caaaaaaaaac", "bcccdcdcccb")
        .aisle("icccdcdccci", "caaaafaaaac", "caaaaaaaaac", "caaaaaaaaac", "daaaaaaaaad", "caaaaeaaaac", "daaaaaaaaad", "caaaaaaaaac", "caaaaaaaaac", "caaaafaaaac", "bcccdcdcccb")
        .aisle("aiiiijiiiia", "bcccdcdcccb", "bcccdcdcccb", "bccdcccdccb", "bddcccccddb", "bcccceccccb", "bddcccccddb", "bccdcccdccb", "bcccdcdcccb", "bcccdcdcccb", "abbbbbbbbba")
        .where("a", Predicates.any())
        .where("b", Predicates.blocks("gtceu:stress_proof_casing"))
        .where("c", Predicates.blocks("gtceu:fusion_glass"))
        .where("d", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
        .where("e", Predicates.blocks("gtceu:superconducting_coil"))
        .where("f", Predicates.blocks("gtceu:laser_safe_engraving_casing"))
        .where("g", Predicates.blocks("gtceu:large_scale_assembler_casing"))
        .where("h", Predicates.blocks("gtceu:fusion_coil"))
        .where("i", Predicates.blocks("gtceu:stress_proof_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/stress_proof_casing",
      "gtceu:block/machines/assembler"
    );
});