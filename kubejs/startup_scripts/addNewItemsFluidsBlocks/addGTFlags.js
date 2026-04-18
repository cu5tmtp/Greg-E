const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry('gtceu:material', event => {

    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)
    GTMaterials.Naquadria.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)

    addFluid(GTMaterials.SodiumHydroxide, $FluidStorageKeys.LIQUID)

    event.create('sintercoke')
        .ingot()
        .formula("Ca₂Fe₂O₄")
        .color(0x818589)
        .iconSet(GTMaterialIconSet.ROUGH)

    event.create('nebulon_omega')
        .liquid()
        .ore()
        .formula("Nl-Ω")
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)
        .color(0x702963)

    event.create('nebulon_gamma_slurry')
        .fluid()
        .formula("NqNl-γ")
        .color(0x702963)
        .iconSet(GTMaterialIconSet.ROUGH)

    event.create('nebulon_omega_dissolved')
        .fluid()
        .formula("2Na[(Nl-Ω)(OH)₄] + 3H₂")
        .color(0x702963)
        .iconSet(GTMaterialIconSet.ROUGH)

    event.create('naquadron_delta')
        .liquid()
        .plasma()
        .formula("NqNl-δ")
        .color(0x353935)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('naquadron_zeta')
        .liquid()
        .formula("NqNl₂-ζ")
        .color(0x353935)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('dinebulon_zeta')
        .liquid()
        .formula("Nl₂-ζ")
        .color(0x353935)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fluoronaquadic_acid')
        .liquid()
        .formula("H₂F₄Nq")
        .color(0x353935)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('excited_naquadic_solution')
        .liquid()
        .formula("aq · (NqHF₂)!")
        .color(0x28282B)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('dinebulon_zeta_omni_fluid')
        .liquid()
        .formula("(Nl₂-ζ) + (NqHF₂)")
        .color(0x28282B)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('nebulon_zeta')
        .liquid()
        .formula("Nl-ζ")
        .color(0x28282B)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('nebulon_gamma')
        .fluid()
        .formula("Nl-γ")
        .color(0x702963)
        .iconSet(GTMaterialIconSet.ROUGH)

    event.create('nebulon_alpha')
        .ingot()
        .liquid()
        .formula("Nl-α")
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_DENSE)
        .color(0x702963)
 
});

    let addFluid = (mat, key) => {
        let prop = new $FluidProperty();
        prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
        mat.setProperty(PropertyKey.FLUID, prop);
    }