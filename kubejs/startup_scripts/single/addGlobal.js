GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

    event.create("essentia_smelting")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('essentia_smelter', 'simple')
        .tiers([GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV])
        .definition((tier, builder) => {
            return builder
                .recipeType('essentia_smelting')
                .workableTieredHullModel("gtceu:block/machines/alloy_smelter")
        })

})