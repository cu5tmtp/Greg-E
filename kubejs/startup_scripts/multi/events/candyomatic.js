GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("candyomatic")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("candyomatic", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("candyomatic")
    .appearanceBlock(() => new Block.getBlock("minecraft:acacia_planks"))
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
          .aisle("baaab", "baaab", "baaab", "bcccb", "bbbbb", "bbbbb")
          .aisle("aaaaa", "aaaaa", "aaaaa", "caaac", "bbcbb", "bbbbb")
          .aisle("addda", "addda", "addda", "addda", "bcecb", "bebbb")
          .aisle("accca", "aabaa", "abiba", "caaac", "bbcbb", "bbbbb")

          .where("a", Predicates.blocks("minecraft:acacia_planks")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
          .where("b", Predicates.any())
          .where("c", Predicates.blocks("minecraft:acacia_slab"))
          .where("d", Predicates.blocks("minecraft:black_terracotta"))
          .where("e", Predicates.blocks("minecraft:brown_terracotta"))
          .where("i", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "minecraft:block/acacia_planks",
      "gtceu:block/multiblock/distillation_tower"
    );
});