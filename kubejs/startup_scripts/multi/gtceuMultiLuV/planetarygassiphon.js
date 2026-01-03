GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("planetarygassiphon")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 6, 6)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("planetarygassiphon", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("planetarygassiphon")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '     C     ', '     C     ', '   BBBBB   ', '     F     ', '     F     ', '     F     ', '           ', '           ', '           ')
        .aisle('           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '     C     ', '           ', '           ', '  BGGCGGB  ', '           ', '           ', '           ', '     F     ', '           ', '           ')
        .aisle('           ', '           ', '           ', '           ', '           ', '     C     ', '     C     ', '     C     ', '     C     ', '     C     ', '     C     ', '     C     ', '     I     ', '     C     ', '           ', '           ', '           ', ' BGGGCGGGB ', '           ', '           ', '           ', '           ', '     F     ', '           ')
        .aisle('           ', '           ', '           ', '           ', '     C     ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '     C     ', '           ', '           ', '           ', '           ', 'BGGGGCGGGGB', '           ', '           ', '           ', '           ', '           ', '     F     ')
        .aisle('           ', '           ', '           ', '     C     ', '           ', '           ', '           ', '           ', '           ', '     E     ', '     D     ', '     E     ', '    CCC    ', '    CGC    ', '    CGC    ', '    CGC    ', '    CGC    ', 'BGGGCCCGGGB', '           ', '           ', '           ', '           ', '           ', '    FFF    ')
        .aisle('     D     ', '     E     ', '     E     ', '    CEC    ', '   C E C   ', '  C  E  C  ', '  C  E  C  ', '  C  E  C  ', '  C  E  C  ', '  C EEE C  ', '  C DED C  ', '  C EEE C  ', '  ICCECCI  ', '  C GHG C  ', ' C  GHG  C ', 'C   GHG   C', 'C   GHG   C', 'BCCCCECCCCB', 'F    E    F', 'F    E    F', 'F    D    F', ' F   E   F ', '  F  E  F  ', '   FFIFF   ')
        .aisle('           ', '           ', '           ', '     C     ', '           ', '           ', '           ', '           ', '           ', '     E     ', '     D     ', '     E     ', '    CCC    ', '    CGC    ', '    CGC    ', '    CGC    ', '    CGC    ', 'BGGGCCCGGGB', '           ', '           ', '           ', '           ', '           ', '    FFF    ')
        .aisle('           ', '           ', '           ', '           ', '     C     ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '     C     ', '           ', '           ', '           ', '           ', 'BGGGGCGGGGB', '           ', '           ', '           ', '           ', '           ', '     F     ')
        .aisle('           ', '           ', '           ', '           ', '           ', '     C     ', '     C     ', '     C     ', '     C     ', '     C     ', '     C     ', '     C     ', '     I     ', '     C     ', '           ', '           ', '           ', ' BGGGCGGGB ', '           ', '           ', '           ', '           ', '     F     ', '           ')
        .aisle('           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '     C     ', '           ', '           ', '  BGGCGGB  ', '           ', '           ', '           ', '     F     ', '           ', '           ')
        .aisle('           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '     C     ', '     C     ', '   BBABB   ', '     F     ', '     F     ', '     F     ', '           ', '           ', '           ')
        .where('A', Predicates.controller(Predicates.blocks(definition.get())))
        .where('B', Predicates.blocks('gtceu:vibration_safe_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(4))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where('C', Predicates.blocks('gtceu:vibration_safe_casing'))
        .where('D', Predicates.blocks('gregecore:ptfe_engine_intake'))
        .where('E', Predicates.blocks('gtceu:inert_machine_casing'))
        .where('F', Predicates.blocks('gtceu:heatproof_machine_casing'))
        .where('G', Predicates.blocks('gtceu:tempered_glass'))
        .where('H', Predicates.blocks('gtceu:titanium_gearbox'))
        .where('I', Predicates.blocks('gregecore:vibration_engine_intake'))
        .where(' ', Predicates.any())
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/vibration_safe_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});