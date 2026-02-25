import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import projects from "./data/projects";
import "./NewApp.css";

function NewApp() {
    const [selectedId, setSelectedId] = useState(projects[0]?.id);
    const [sidebarHasScroll, setSidebarHasScroll] = useState(false);

    const headerRef = useRef(null);
    const sidebarRef = useRef(null);
    const listRef = useRef(null);
    const detailRef = useRef(null);

    const selected = useMemo(
        () => projects.find((p) => p.id === selectedId),
        [selectedId]
    );

    // Startup animation
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            tl.fromTo(
                headerRef.current,
                { y: -12, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 }
            );

            tl.fromTo(
                sidebarRef.current,
                { x: -16, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6 },
                "-=0.3"
            );

            const items = listRef.current?.querySelectorAll("[data-project-item]");
            if (items?.length) {
                tl.fromTo(
                    items,
                    { y: 10, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4, stagger: 0.06 },
                    "-=0.35"
                );
            }

            tl.fromTo(
                detailRef.current,
                { x: 16, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6 },
                "-=0.4"
            );
        });

        return () => ctx.revert();
    }, []);

    // Small scroll interaction: add/remove shadow when the sidebar is scrolled
    const handleSidebarScroll = (e) => {
        const hasScroll = e.currentTarget.scrollTop > 0;
        if (hasScroll !== sidebarHasScroll) {
            setSidebarHasScroll(hasScroll);

            gsap.to(headerRef.current, {
                boxShadow: hasScroll
                    ? "0 10px 30px rgba(0,0,0,0.10)"
                    : "0 0px 0px rgba(0,0,0,0)",
                duration: 0.2,
                ease: "power1.out",
            });
        }
    };

    // Animate detail swap when selecting a new project
    const selectProject = (id) => {
        if (id === selectedId) return;

        const el = detailRef.current;

        gsap.to(el, {
            opacity: 0,
            x: 10,
            duration: 0.18,
            ease: "power1.in",
            onComplete: () => {
                setSelectedId(id);

                // Wait for React to paint the new content, then animate it in
                requestAnimationFrame(() => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, x: 10 },
                        { opacity: 1, x: 0, duration: 0.32, ease: "power2.out" }
                    );
                });
            },
        });

        // Optional: subtle “selected item” pulse
        const activeBtn = listRef.current?.querySelector(`[data-id="${id}"]`);
        if (activeBtn) {
            gsap.fromTo(
                activeBtn,
                { scale: 1 },
                { scale: 1.02, duration: 0.12, yoyo: true, repeat: 1, ease: "power1.out" }
            );
        }
    };

    return (
        <div className="appShell">
            <div className="page">
                <header className="header" ref={headerRef}>
                    <div className="brand">
                        <div className="name">Jonah</div>
                        <div className="subtitle">Software Engineer • Projects</div>
                    </div>

                    <div className="actions">
                        <a className="chip" href="https://github.com/yourname" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a className="chip" href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                        <a className="chip" href="/resume.pdf" target="_blank" rel="noreferrer">
                            Resume
                        </a>
                    </div>
                </header>

                <main className="main">
                    <aside className="sidebarWrap">
                        <div
                            className={`sidebar ${sidebarHasScroll ? "sidebarScrolled" : ""}`}
                            ref={sidebarRef}
                            onScroll={handleSidebarScroll}
                        >
                            <div className="sidebarTitle">Projects</div>

                            <div className="projectList" ref={listRef}>
                                {projects.map((p) => {
                                    const active = p.id === selectedId;
                                    return (
                                        <button
                                            key={p.id}
                                            data-project-item
                                            data-id={p.id}
                                            className={`projectItem ${active ? "active" : ""}`}
                                            onClick={() => selectProject(p.id)}
                                            aria-current={active ? "true" : "false"}
                                        >
                                            <div className="projectItemTop">
                                                <div className="projectTitle">{p.title}</div>
                                                <div className="dot" aria-hidden="true" />
                                            </div>
                                            <div className="projectTagline">{p.tagline}</div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </aside>

                    <section className="detail" ref={detailRef}>
                        {selected ? (
                            <>
                                <div className="detailHeader">
                                    <h2 className="detailTitle">{selected.title}</h2>
                                    <div className="detailLinks">
                                        {selected.links?.live && (
                                            <a className="btn" href={selected.links.live} target="_blank" rel="noreferrer">
                                                Live
                                            </a>
                                        )}
                                        {selected.links?.github && (
                                            <a className="btn" href={selected.links.github} target="_blank" rel="noreferrer">
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="detailDesc">{selected.description}</p>

                                <div className="section">
                                    <div className="sectionLabel">Stack</div>
                                    <div className="pillRow">
                                        {selected.stack.map((s) => (
                                            <span className="pill" key={s}>
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="section">
                                    <div className="sectionLabel">Highlights</div>
                                    <ul className="bullets">
                                        {selected.highlights.map((h) => (
                                            <li key={h}>{h}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="footerNote">
                                    Want the code for a specific feature? Ask and I’ll help you polish it.
                                </div>
                            </>
                        ) : (
                            <div>No project selected.</div>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}


export default NewApp;