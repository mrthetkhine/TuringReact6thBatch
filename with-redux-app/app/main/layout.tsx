import {Providers} from "@/lib/providers";
import styles from "@/app/styles/layout.module.css";
import {useState} from "react";

export default function MainLayout(props: React.PropsWithChildren)
{
    //const [data,setData] = useState();
    return (
        <Providers>
            <div>
                Custom layout
                <main className={styles.main}>
                    {props.children}
                </main>
            </div>
        </Providers>
        );
}