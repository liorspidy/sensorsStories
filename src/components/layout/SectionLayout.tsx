import classes from "./SectionLayout.module.scss";

interface SectionLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const SectionLayout = ({ children, title }: SectionLayoutProps) => (
    <div className={classes.section}>
        {title && (
            <div className={classes.titleContainer}>
                <h2 className={classes.sectionTitle}>{title}</h2>
            </div>
        )}
        {children}
    </div>
);

export default SectionLayout;
