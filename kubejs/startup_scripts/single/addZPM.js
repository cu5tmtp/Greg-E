GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

    event.create("solar_ray_filter")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('solar_ray_particle_filter', 'simple')
        .tiers([GTValues.ZPM, GTValues.UV, GTValues.UHV])
        .definition((tier, builder) => {
            return builder
                .recipeType('solar_ray_filter')
                .workableTieredHullModel("gtceu:block/machines/air_scrubber")
        })

})