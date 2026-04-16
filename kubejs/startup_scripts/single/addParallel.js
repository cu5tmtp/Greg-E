const $ParallelHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine")

GTCEuStartupEvents.registry("gtceu:machine", event => {

    event.create("uhv_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.UHV)
        .definition((tier, builder) =>
            builder
                .langValue("Epic Parallel Control Hatch")
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(ResourceLocation("kubejs:block/parallel/parallel_hatch_epic"))
        )

})
