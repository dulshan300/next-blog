export default function Alert({ children, type }) {
    return (
        <div className={"alert " + type}>
            {children}

            <style jsx>{`
                .alert {
                    padding: 10px 5px;
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    margin: 5px 0;
                }
                .alert.success {
                    background-color: #2e9422;
                    color: #fff;
                }
                .alert.error {
                    background-color: #d82c2c;
                    color: #fff;
                }
            `}</style>
        </div>
    );
}
