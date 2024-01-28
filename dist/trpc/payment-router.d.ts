export declare const paymentRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: any;
    meta: object;
    errorShape: never;
    transformer: import("@trpc/server").DataTransformerOptions;
}>, {
    createSession: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: any;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        _meta: object;
        _ctx_out: {
            user: any;
        } | {
            user: any;
        };
        _input_in: {
            productIds?: string[];
        };
        _input_out: {
            productIds?: string[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        url: string;
    }>;
    pollOrderStatus: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: any;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        _meta: object;
        _ctx_out: {
            user: any;
        } | {
            user: any;
        };
        _input_in: {
            orderId?: string;
        };
        _input_out: {
            orderId?: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        isPaid: boolean;
    }>;
}>;
