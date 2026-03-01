AvaritiaEvents.singularity(event => {

    event.register("avaritia:lvcircuitsingularity", s => {
        s.setDisplayName("LV Circuit Singularity")
        s.setIngredient('gtceu:basic_electronic_circuit')
        s.setColors(0x36454F, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.register("avaritia:mvcircuitsingularity", s => {
        s.setDisplayName("MV Circuit Singularity")
        s.setIngredient('gtceu:good_electronic_circuit')
        s.setColors(0x36454F, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.register("avaritia:hvcircuitsingularity", s => {
        s.setDisplayName("HV Circuit Singularity")
        s.setIngredient('gtceu:advanced_integrated_circuit')
        s.setColors(0xF5F4F2, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.register("avaritia:evcircuitsingularity", s => {
        s.setDisplayName("EV Circuit Singularity")
        s.setIngredient('gtceu:micro_processor_computer')
        s.setColors(0xFACB6B, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.register("avaritia:ivcircuitsingularity", s => {
        s.setDisplayName("IV Circuit Singularity")
        s.setIngredient('gtceu:micro_processor_mainframe')
        s.setColors(0xA8FFFD, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.register("avaritia:luvcircuitsingularity", s => {
        s.setDisplayName("LuV Circuit Singularity")
        s.setIngredient('gtceu:nano_processor_mainframe')
        s.setColors(0xA8FFBC, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.register("avaritia:zpmcircuitsingularity", s => {
        s.setDisplayName("ZPM Circuit Singularity")
        s.setIngredient('gtceu:quantum_processor_mainframe')
        s.setColors(0x1F2622, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.register("avaritia:uvcircuitsingularity", s => {
        s.setDisplayName("UV Circuit Singularity")
        s.setIngredient('gtceu:quantum_processor_mainframe')
        s.setColors(0x11472F, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.register("avaritia:uhvcircuitsingularity", s => {
        s.setDisplayName("UHV Circuit Singularity")
        s.setIngredient('gtceu:wetware_processor_mainframe')
        s.setColors(0x47111E, 0x140404)
        s.setEnabled(true)
        s.setRecipeEnabled(false)
    })

    event.remove('avaritia:emerald')
    event.remove('avaritia:iron')
    event.remove('avaritia:platinum')
    event.remove('avaritia:glowstone')
    event.remove('avaritia:bronze')
    event.remove('avaritia:coal')
    event.remove('avaritia:obsidian')
    event.remove('avaritia:uranium')
    event.remove('avaritia:copper')
    event.remove('avaritia:redstone')
    event.remove('avaritia:invar')
    event.remove('avaritia:blue_ice')
    event.remove('avaritia:silver')
    event.remove('avaritia:steel')
    event.remove('avaritia:osmium')
    event.remove('avaritia:electrum')
    event.remove('avaritia:lapis_lazuli')
    event.remove('avaritia:nickel')
    event.remove('avaritia:diamond')
    event.remove('avaritia:tin')
    event.remove('avaritia:netherite')
    event.remove('avaritia:amethyst_shard')
    event.remove('avaritia:gold')
    event.remove('avaritia:lead')
    event.remove('avaritia:quartz')

})