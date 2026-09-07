GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("magicalgarden")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(1, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOXED_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("magicalgarden", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("magicalgarden")
    .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("abbbbba", "abaacba", "abaacbc", "abaccbc", "accccca", "aacccaa", "aaaaaaa", "aaaaaaa")
        .aisle("bdddddb", "baaaaab", "baaaaab", "baaaaab", "abaaabc", "acbbbca", "aacccaa", "aaaaaaa")
        .aisle("bdddddb", "aahaiac", "aaaaaac", "aaaaaac", "aaaaaac", "abbbbbc", "accccca", "aaaaaaa")
        .aisle("bdddddb", "aafgaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "abbbbbc", "acccccc", "aaaccaa")
        .aisle("bdddddb", "aaaaeaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "abbbbbc", "accccca", "aaaacaa")
        .aisle("bdddddb", "baaaaab", "baaaaab", "baaaaab", "abaaabc", "acbbbca", "aacccaa", "aaaaaaa")
        .aisle("abbjbba", "abaacba", "abaacba", "abaacba", "acaacca", "aacccaa", "aaaaaaa", "aaaaaaa")
        .where("a", Predicates.any())
        .where("b", Predicates.blocks("minecraft:oak_wood")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))) 
        .where("c", Predicates.blocks("minecraft:oak_leaves"))
        .where("d", Predicates.blocks("minecraft:grass_block"))
        .where("e", Predicates.blocks("botania:lime_mystical_flower"))
        .where("f", Predicates.blocks("botania:yellow_mystical_flower"))
        .where("g", Predicates.blocks("botania:orange_mystical_flower"))
        .where("h", Predicates.blocks("botania:cyan_mystical_flower"))
        .where("i", Predicates.blocks("botania:red_mystical_flower"))
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "minecraft:block/oak_log",
      "gtceu:block/multiblock/distillation_tower"
    );
});