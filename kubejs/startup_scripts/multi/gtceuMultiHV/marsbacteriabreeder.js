GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("marsbacteriabreeder")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("marsbacteriabreeder", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("marsbacteriabreeder")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("agcga", "abdba", "abdba", "abdba", "abcba", "aaaaa", "aaaaa")
        .aisle("gbbbg", "baaab", "baeab", "baaab", "bbbbb", "aaaaa", "aaaaa")
        .aisle("cbbbc", "daaad", "daead", "dafad", "cbfbc", "aafaa", "aafaa")
        .aisle("gbbbg", "baaab", "baeab", "baaab", "bbbbb", "aaaaa", "aaaaa")
        .aisle("aghga", "abdba", "abdba", "abdba", "abcba", "aaaaa", "aaaaa")
        .where("a", Predicates.any())
        .where("b", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("c", Predicates.blocks("gtceu:steel_firebox_casing"))
        .where("d", Predicates.blocks("gtceu:tempered_glass"))
        .where("e", Predicates.blocks("gtceu:stainless_steel_frame"))
        .where("f", Predicates.blocks("gtceu:steel_pipe_casing"))
        .where('g', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where('h', Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'gtceu:block/casings/solid/machine_casing_solid_steel',
      "gtceu:block/multiblock/large_miner"
    );
});