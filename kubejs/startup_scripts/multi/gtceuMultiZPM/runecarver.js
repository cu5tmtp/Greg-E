GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("runecarver")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("runecarver", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("runecarver")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("iiiii", "bcccb", "bcccb", "bcccb", "bcccb", "bdcdb", "bdddb", "dbbbd")
        .aisle("iaaai", "ceeec", "ceeec", "ceeec", "ceeec", "deeed", "defed", "bdddb")
        .aisle("iaaai", "cegec", "ceeec", "cehec", "cefec", "cefec", "dfffd", "bdddb")
        .aisle("iaaai", "ceeec", "ceeec", "ceeec", "ceeec", "deeed", "defed", "bdddb")
        .aisle("iijii", "bcccb", "bcccb", "bcccb", "bcccb", "bdcdb", "bdddb", "dbbbd")
        .where("a", Predicates.blocks("gtceu:steel_turbine_casing"))
        .where("b", Predicates.blocks("gtceu:laser_safe_engraving_casing"))
        .where("c", Predicates.blocks("gtceu:laminated_glass"))
        .where("d", Predicates.blocks("gtceu:shock_proof_cutting_casing"))
        .where("e", Predicates.any())
        .where("f", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("g", Predicates.blocks("gtceu:assembly_line_unit"))
        .where("h", Predicates.blocks("minecraft:red_stained_glass"))
        .where("i", Predicates.blocks('gtceu:steel_turbine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/mechanic/machine_casing_turbine_steel",
      "gtceu:block/multiblock/distillation_tower"
    );
});