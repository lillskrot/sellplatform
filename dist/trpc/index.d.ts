export declare const appRouter: import("@trpc/server").CreateRouterInner<
  import("@trpc/server").RootConfig<{
    ctx: any;
    meta: object;
    errorShape: never;
    transformer: import("@trpc/server").DataTransformerOptions;
  }>,
  {
    auth: import("@trpc/server").CreateRouterInner<
      import("@trpc/server").RootConfig<{
        ctx: any;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
      }>,
      {
        createPayloadUser: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: any;
              meta: object;
              errorShape: never;
              transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: any;
            _input_in: {
              email?: string;
              password?: string;
            };
            _input_out: {
              email?: string;
              password?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
          },
          {
            success: boolean;
            sentToEmail: string;
          }
        >;
        verifyEmail: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: any;
              meta: object;
              errorShape: never;
              transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: any;
            _input_in: {
              token?: string;
            };
            _input_out: {
              token?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
          },
          {
            success: boolean;
          }
        >;
        signIn: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: any;
              meta: object;
              errorShape: never;
              transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: any;
            _input_in: {
              email?: string;
              password?: string;
            };
            _input_out: {
              email?: string;
              password?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
          },
          {
            success: boolean;
          }
        >;
      }
    >;
    payment: import("@trpc/server").CreateRouterInner<
      import("@trpc/server").RootConfig<{
        ctx: any;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
      }>,
      {
        createSession: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: any;
              meta: object;
              errorShape: never;
              transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out:
              | {
                  user: any;
                }
              | {
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
          },
          {
            url: string;
          }
        >;
        pollOrderStatus: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: any;
              meta: object;
              errorShape: never;
              transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out:
              | {
                  user: any;
                }
              | {
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
          },
          {
            isPaid: boolean;
          }
        >;
      }
    >;
    getInfiniteProducts: import("@trpc/server").BuildProcedure<
      "query",
      {
        _config: import("@trpc/server").RootConfig<{
          ctx: any;
          meta: object;
          errorShape: never;
          transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        _meta: object;
        _ctx_out: any;
        _input_in: {
          limit?: number;
          cursor?: number;
          query?: {
            category?: string;
            sort?: "asc" | "desc";
            limit?: number;
          };
        };
        _input_out: {
          limit?: number;
          cursor?: number;
          query?: {
            category?: string;
            sort?: "asc" | "desc";
            limit?: number;
          };
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      },
      {
        items: import("../payload-types").Product[];
        nextPage: number;
      }
    >;
  }
>;
export type AppRouter = typeof appRouter;
