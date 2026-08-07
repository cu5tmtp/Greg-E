GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("bigdistillery")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 6, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("bigdistillery", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("bigdistillery")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("bbbabbb", "bcbabcb", "bcbabcb", "bbbabcb", "aaaabcb", "aaaabbb", "aaaaaaa", "aaaaaaa")
        .aisle("bbbabbb", "cacacac", "cacacac", "bfbacac", "afaacac", "afaabfb", "afaaafa", "aafffaa")
        .aisle("bbbabbb", "bcbabcb", "bcbabcb", "bbbabcb", "aaaabcb", "aaaabbb", "aaaaaaa", "aaafaaa")
        .aisle("aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaafaaa")
        .aisle("adaaada", "adaaada", "aadddaa", "aadedaa", "aadddaa", "aaaaaaa", "aaaaaaa", "aaafaaa")
        .aisle("aagggaa", "aaaaaaa", "addddda", "adaaada", "adaaada", "aadddaa", "aadddaa", "aaafaaa")
        .aisle("aagggaa", "aaaaaaa", "addddda", "aeaaaea", "adaaada", "aadfdaa", "aadfdaa", "aaafaaa")
        .aisle("aagggaa", "aaaaaaa", "addddda", "adaaada", "adaaada", "aadddaa", "aadddaa", "aaaaaaa")
        .aisle("adaaada", "adaaada", "aadIdaa", "aadedaa", "aadddaa", "aaaaaaa", "aaaaaaa", "aaaaaaa")
        .where("a", Predicates.any())
        .where("b", Predicates.blocks("kubejs:machine_casing_tiled_orange"))
        .where("c", Predicates.blocks("gtceu:tempered_glass"))
        .where("d", Predicates.blocks("kubejs:machine_casing_tiled_very_dark_gray")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("e", Predicates.blocks("kubejs:machine_casing_block_magenta"))
        .where("f", Predicates.blocks("kubejs:machine_casing_tiled_dark_gray"))
        .where("g", Predicates.blocks("minecraft:campfire"))
        .where("I", Predicates.controller(Predicates.blocks(definition.get())))
        .where(" ", Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/ctm/machine_casing_tiled_very_dark_gray",
      "gtceu:block/multiblock/distillation_tower"
    );
});