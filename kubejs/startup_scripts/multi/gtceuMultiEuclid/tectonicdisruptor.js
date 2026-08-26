GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("tectonicdisruptor")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("tectonicdisruptor", "multiblock")
    .rotationState(RotationState.ALL)
    .recipeType('tectonicdisruptor')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aaaaaaaaa", "abbaaabba", "abcccccba", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "abcccccba", "abbaaabba", "aaaaaaaaa")
        .aisle("abbaaabba", "bdcccccdb", "bcccccccb", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "bcccccccb", "bdcceccdb", "abbaaabba")
        .aisle("abcccccba", "bcccccccb", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccecccc", "ccccecccc", "bcccccccb", "abcccccba")
        .aisle("aacccccaa", "accccccca", "ccccccccc", "ccccccccc", "ccccfcccc", "ccccfcccc", "ccccgcccc", "cccfhfccc", "ccchhhccc", "cccfhfccc", "cccieiccc", "ccccccccc", "ccccccccc", "accccccca", "aacccccaa")
        .aisle("aacccccaa", "acccjccca", "ccccfcccc", "ccccfcccc", "cccfffccc", "cccfcfccc", "cccgcgccc", "ccchchccc", "ccchchccc", "ccchfhccc", "cccegeccc", "ccecicecc", "ccecicecc", "aecccccea", "aacccccaa")
        .aisle("aacccccaa", "accccccca", "ccccccccc", "ccccccccc", "ccccfcccc", "ccccfcccc", "ccccgcccc", "cccfhfccc", "ccchhhccc", "cccfhfccc", "cccieiccc", "ccccccccc", "ccccccccc", "accccccca", "aacccccaa")
        .aisle("abcccccba", "bcccccccb", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccecccc", "ccccecccc", "bcccccccb", "abcccccba")
        .aisle("abbaaabba", "bdcccccdb", "bcccccccb", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "ccccccccc", "bcccccccb", "bdcceccdb", "abbaaabba")
        .aisle("aaaakaaaa", "abbaaabba", "abcccccba", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "accccccca", "abcccccba", "abbaaabba", "aaaaaaaaa")

        .where("a", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("b", Predicates.blocks("kubejs:machine_casing_tiled_green"))
        .where("c", Predicates.blocks("minecraft:air"))
        .where("d", Predicates.blocks("kubejs:machine_casing_tiled_orange"))
        .where("e", Predicates.blocks("gtceu:blue_steel_frame"))
        .where("f", Predicates.blocks("kubejs:machine_casing_block_gold"))
        .where("g", Predicates.blocks("gtceu:superconducting_coil"))
        .where("h", Predicates.blocks("kubejs:machine_casing_tiled_light_gray"))
        .where("i", Predicates.blocks("kubejs:machine_casing_block_magenta"))
        .where("j", Predicates.blocks("gregecore:ptfe_engine_intake"))
        .where("k", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'gtceu:block/casings/solid/machine_casing_solid_steel',
      'gtceu:block/multiblock/distillation_tower'
    );
});
