-- ========================================================
-- Multi-tenant: escopa o Carômetro por paciente
-- ========================================================
-- Ver /Users/geniantis/.claude/plans/nifty-doodling-stearns.md (Fase 4).
--
-- CORREÇÃO IMPORTANTE (descoberta ao comparar com um backup real da
-- produção antes de aplicar): ao contrário do que uma checagem anterior
-- sugeriu, RLS já estava LIGADO em carometro_sectors/carometro_people, com
-- policies criadas fora do histórico de migrations deste repo:
--   - "Leitura publica carometro_sectors"/"...people" (using true, role public)
--   - "Admins escrevem carometro_sectors"/"...people" (role IN editor/admin)
-- Como policies de SELECT se somam por OR, só derrubar a policy pelo NOME
-- CERTO (sem acento, sem "de") realmente substitui o acesso público. As
-- policies de escrita (que já liberam editor OU admin) ficam intactas —
-- criar uma nossa mais restrita (só admin) do lado ia coexistir sem
-- remover a de editor, então não tem motivo pra mexer nelas aqui.
do $$
begin
  if to_regclass('public.carometro_sectors') is not null then
    execute 'alter table public.carometro_sectors add column if not exists patient_id uuid references public.patients(id) on delete restrict';
    execute 'alter table public.carometro_sectors enable row level security';

    execute 'drop policy if exists "Leitura publica carometro_sectors" on public.carometro_sectors';
    execute 'drop policy if exists "Leitura pública de carometro_sectors" on public.carometro_sectors';
    execute $q$create policy "Leitura publica carometro_sectors" on public.carometro_sectors
        for select using (public.can_view_scoped_content(null, patient_id))$q$;
  end if;

  if to_regclass('public.carometro_people') is not null then
    execute 'alter table public.carometro_people enable row level security';

    execute 'drop policy if exists "Leitura publica carometro_people" on public.carometro_people';
    execute 'drop policy if exists "Leitura pública de carometro_people" on public.carometro_people';
    execute $q$create policy "Leitura publica carometro_people" on public.carometro_people
        for select using (
            exists (select 1 from public.carometro_sectors s
                    where s.id = carometro_people.sector_id
                      and public.can_view_scoped_content(null, s.patient_id))
        )$q$;
  end if;
end $$;
