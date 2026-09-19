/*
GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("magicalassembler")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(9, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOXED_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("magicalassembler", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("magicalassembler")
    .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("abbbbba", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa")
        .aisle("bcdddcb", "aefffea", "acfffca", "acfffca", "aacecaa", "aaaaaaa", "aaaaaaa", "aaaaaaa")
        .aisle("bdcccdb", "afaaafa", "afaaafa", "afaaafa", "acaaaca", "aadcdaa", "aaaaaaa", "aaaaaaa")
        .aisle("bdcecdb", "afagafa", "afagafa", "afagafa", "aeaeaea", "aacecaa", "aaaeaaa", "aaaeaaa")
        .aisle("bdcccdb", "afaaafa", "afaaafa", "afaaafa", "acaaaca", "aadcdaa", "aaaaaaa", "aaaaaaa")
        .aisle("bcdddcb", "aefffea", "acfffca", "acfffca", "aacecaa", "aaaaaaa", "aaaaaaa", "aaaaaaa")
        .aisle("abbjbba", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa")

        .where("a", Predicates.blocks("minecraft:air"))
        .where("b", Predicates.blocks("botania:livingrock_bricks")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))) 
        .where("c", Predicates.blocks("botania:livingwood"))
        .where("d", Predicates.blocks("kubejs:machine_casing_block_diamond"))
        .where("e", Predicates.blocks("botania:glimmering_livingwood"))
        .where("f", Predicates.blocks("gtceu:tempered_glass"))
        .where("g", Predicates.blocks("gtceu:steel_gearbox"))
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "botania:block/livingrock_bricks",
      "gtceu:block/multiblock/distillation_tower"
    );
});
*/