/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PetOwnerInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).petOwner.createMany(input as any))),

        create: procedure.input($Schema.PetOwnerInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).petOwner.create(input as any))),

        deleteMany: procedure.input($Schema.PetOwnerInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).petOwner.deleteMany(input as any))),

        delete: procedure.input($Schema.PetOwnerInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).petOwner.delete(input as any))),

        findFirst: procedure.input($Schema.PetOwnerInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).petOwner.findFirst(input as any))),

        findMany: procedure.input($Schema.PetOwnerInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).petOwner.findMany(input as any))),

        findUnique: procedure.input($Schema.PetOwnerInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).petOwner.findUnique(input as any))),

        updateMany: procedure.input($Schema.PetOwnerInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).petOwner.updateMany(input as any))),

        update: procedure.input($Schema.PetOwnerInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).petOwner.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PetOwnerCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetOwnerCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetOwnerCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetOwnerCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PetOwnerCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetOwnerCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PetOwnerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PetOwnerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetOwnerCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetOwnerCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PetOwnerGetPayload<T>, Context>) => Promise<Prisma.PetOwnerGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PetOwnerDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetOwnerDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetOwnerDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetOwnerDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PetOwnerDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetOwnerDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PetOwnerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PetOwnerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetOwnerDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetOwnerDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PetOwnerGetPayload<T>, Context>) => Promise<Prisma.PetOwnerGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PetOwnerFindFirstArgs, TData = Prisma.PetOwnerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PetOwnerFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PetOwnerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PetOwnerFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PetOwnerFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PetOwnerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PetOwnerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PetOwnerFindManyArgs, TData = Array<Prisma.PetOwnerGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PetOwnerFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PetOwnerGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PetOwnerFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PetOwnerFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PetOwnerGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PetOwnerGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PetOwnerFindUniqueArgs, TData = Prisma.PetOwnerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PetOwnerFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PetOwnerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PetOwnerFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PetOwnerFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PetOwnerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PetOwnerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PetOwnerUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetOwnerUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetOwnerUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetOwnerUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PetOwnerUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PetOwnerUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PetOwnerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PetOwnerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PetOwnerUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PetOwnerUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PetOwnerGetPayload<T>, Context>) => Promise<Prisma.PetOwnerGetPayload<T>>
            };

    };
}
