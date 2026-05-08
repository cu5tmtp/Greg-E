GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("specialpress")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("specialpress", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("specialpress")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("chhhc", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc")
        .aisle("haaah", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc")
        .aisle("haaah", "acdca", "accca", "aceca", "acfca", "acfca", "cagac")
        .aisle("haaah", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc")
        .aisle("chihc", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc")
        .where("a", Predicates.blocks("gtceu:heatproof_machine_casing"))
        .where("b", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("c", Predicates.any())
        .where("d", Predicates.blocks("minecraft:anvil"))
        .where("e", Predicates.blocks("gtceu:lv_machine_casing"))
        .where("f", Predicates.blocks("minecraft:iron_bars"))
        .where("g", Predicates.blocks("gtceu:steel_gearbox"))
        .where('h', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2)) 
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where('i', Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'gtceu:block/casings/solid/machine_casing_solid_steel',
      "gtceu:block/multiblock/large_miner"
    );
});