const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry('gtceu:material', event => {

    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)
    GTMaterials.Naquadria.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)

    addFluid(GTMaterials.SodiumHydroxide, $FluidStorageKeys.LIQUID)

});

    let addFluid = (mat, key) => {
        let prop = new $FluidProperty();
        prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
        mat.setProperty(PropertyKey.FLUID, prop);
    }