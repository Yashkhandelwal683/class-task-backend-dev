import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int arr1[] = new int[m];
        int n = sc.nextInt();
        int arr2[] = new int[n];

        int ans[] = relativeSortArray(arr1, arr2);

        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i] + " ");
        }
    }

    public static int[] relativeSortArray(int[] arr1, int[] arr2) {
        Map<Integer, Integer> freq = new HashMap<>();

        for (int x : arr1) {
            freq.put(x, freq.getOrDefault(x, 0) + 1);
        }

        int[] result = new int[arr1.length];
        int idx = 0;

        for (int x : arr2) {
            int count = freq.get(x);
            while (count-- > 0) {
                result[idx++] = x;
            }
            freq.remove(x);
        }

        List<Integer> remaining = new ArrayList<>();
        for (int key : freq.keySet()) {
            int count = freq.get(key);
            while (count-- > 0) {
                remaining.add(key);
            }
        }

        Collections.sort(remaining);
        for (int x : remaining) {
            result[idx++] = x;
        }

        return result;
    }
}