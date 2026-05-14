GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("largecomponentmassassembler", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('component_mass_assembly')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("hhhhhhhh", "adddddda", "adddddda", "adddddda", "aaaaaaaa")
        .aisle("hbbbbbbh", "beeeeeeb", "bffffffb", "beeeeeeb", "abbbbbba")
        .aisle("hbbbbbbh", "beeeeeeb", "cggggggc", "beeeeeeb", "abbbbbba")
        .aisle("hbbbbbbh", "beeeeeeb", "bffffffb", "beeeeeeb", "abbbbbba")
        .aisle("hihhhhhh", "adddddda", "adddddda", "adddddda", "aaaaaaaa")
        .where("a", Predicates.blocks("gtceu:tungstensteel_turbine_casing"))
        .where("b", Predicates.blocks("gtceu:robust_machine_casing"))
        .where("c", Predicates.blocks("gtceu:steel_pipe_casing"))
        .where("d", Predicates.any())
        .where("e", Predicates.blocks("gtceu:clean_machine_casing"))
        .where("f", Predicates.blocks("gtceu:tempered_glass"))
        .where("g", Predicates.blocks("gtceu:stainless_steel_gearbox"))
        .where("h", Predicates.blocks("gtceu:tungstensteel_turbine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where("i", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'gtceu:block/casings/mechanic/machine_casing_turbine_tungstensteel',
      'gtceu:block/multiblock/distillation_tower'
    );
});
