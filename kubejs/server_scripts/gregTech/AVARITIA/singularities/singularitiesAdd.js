AvaritiaEvents.singularity(event => {

    event.register("avaritia:lvcircuitsingularity", s => {
        s.setDisplayName("LV Circuit Singularity")
            .setColors(0x36454F, 0x140404)
            .setEnabled(true)
    })

    event.register("avaritia:mvcircuitsingularity", s => {
        s.setDisplayName("MV Circuit Singularity")
            .setColors(0x36454F, 0x140404)
            .setEnabled(true)
    })

    event.register("avaritia:hvcircuitsingularity", s => {
        s.setDisplayName("HV Circuit Singularity")
            .setColors(0xF5F4F2, 0x140404)
            .setEnabled(true)
    })

    event.register("avaritia:evcircuitsingularity", s => {
        s.setDisplayName("EV Circuit Singularity")
            .setColors(0xFACB6B, 0x140404)
            .setEnabled(true)
    })

    event.register("avaritia:ivcircuitsingularity", s => {
        s.setDisplayName("IV Circuit Singularity")
            .setColors(0xA8FFFD, 0x140404)
            .setEnabled(true)
    })

    event.register("avaritia:luvcircuitsingularity", s => {
        s.setDisplayName("LuV Circuit Singularity")
            .setColors(0xA8FFBC, 0x140404)
            .setEnabled(true)
    })

    event.register("avaritia:zpmcircuitsingularity", s => {
        s.setDisplayName("ZPM Circuit Singularity")
            .setColors(0x1F2622, 0x140404)
            .setEnabled(true)
    })

    event.register("avaritia:uvcircuitsingularity", s => {
        s.setDisplayName("UV Circuit Singularity")
            .setColors(0x11472F, 0x140404)
            .setEnabled(true)
    })

    event.register("avaritia:uhvcircuitsingularity", s => {
        s.setDisplayName("UHV Circuit Singularity")
            .setColors(0x47111E, 0x140404)
            .setEnabled(true)
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