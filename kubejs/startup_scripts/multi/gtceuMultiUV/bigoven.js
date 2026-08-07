GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("bigoven")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("bigoven", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("bigoven")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("abbbbba", "abbbbba", "bbbbbbb", "bbbbbbb", "bbbbbbb", "aaaaaaa", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb")
        .aisle("bbbbbbb", "aaaaaaa", "baaaaab", "baaaaab", "baaaaab", "aaaaaaa", "baaaaab", "bbbabbb", "bbbabbb", "bbbabbb")
        .aisle("bbbbbbb", "aaaaaaa", "babbbab", "babbbab", "baaaaab", "aaaaaaa", "baaaaab", "bbaaabb", "bbadabb", "bbababb")
        .aisle("bbbbbbb", "aaaaaaa", "babbbab", "babbbab", "baaaaab", "aaaaaaa", "baaaaab", "bbbabbb", "bbbabbb", "bbbabbb")
        .aisle("bbbbbbb", "aaaaaaa", "bacbcab", "bacbcab", "baaaaab", "aaaaaaa", "baaaaab", "bbbbbbb", "bbbbbbb", "bbbbbbb")
        .aisle("bbbbbbb", "aaaIaaa", "bababab", "bababab", "baaaaab", "aaaaaaa", "baaaaab", "bbbbbbb", "bbbbbbb", "bbbbbbb")
        .aisle("abbbbba", "abbbbba", "bbbbbbb", "bbbbbbb", "bbbbbbb", "aaaaaaa", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb")
        .where("a", Predicates.blocks("kubejs:machine_casing_tiled_very_dark_gray")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("minecraft:coal_block"))
        .where("d", Predicates.blocks("minecraft:campfire"))
        .where("I", Predicates.controller(Predicates.blocks(definition.get())))
        .where(" ", Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/ctm/machine_casing_tiled_very_dark_gray",
      "gtceu:block/multiblock/distillation_tower"
    );
});